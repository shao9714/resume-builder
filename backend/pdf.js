const pdf = require('pdfmake');
var fs = require('fs');

var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};

var printer = new pdf(fonts);
var name = "CHRISTOPHER\nMORGAN";
var address = "177 Great Portland Street, London W5W 6PQ";
var phone = "+44 (0)20 7666 8555";
var email = "christopher.morgan@gmail.com";
var summary = "Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, PHP OOP, JavaScript, CSS, MySQL. Strong background in project management and customer relations.\n\n";
var skills = ['Project management', 'Strong decision maker', 'Complex problem solver', 'Creative design', 'Innovative', 'Service-focused\n\n']
var experience = [{
    "title": "Web Developer",
    "date": "09/2015 to 05/2019",
    "company": "Luna Web Design",
    "location": "New York",
    "bulletins": ['Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences.',
            'Develop project concepts and maintain optimal workflow.',
            'Work with senior developer to manage large, complex design projects for corporate clients.',
            'Complete detailed programming and development tasks for front end public and internal websites as well as challenging back-end server code.',
            'Carry out quality assurance tests to discover errors and optimize usability.\n\n']
}];
var education = "Bachelor of Science: Computer Information Systems - 2014"
var university = "Columbia University, NY\n\n"
var languages = ["Spanish - C2", "Chinese - A1\n\n"];
var certifications = ["PHP Framework(certificate): Zend, Codeigniter, Symfony", "Programming Languages: Javascript, PHP"];

var docDefinition = {
    content: [
        {
            style: 'banner',
            table: {
                widths: [ '50%', '50%'],
                heights: [ 120 ],
                body: [
                    [{
                        text: `${name}`,
                        style: 'name',
                        margin: [15, 35, 0, 0]
                        
                    }, [{
                        text: "Address:",
                        style: 'contact',
                        margin: [15, 35, 0, 0]
                    },{
                        text: `${address}`,
                        style: 'contact_content'
                    },{
                        text: "Phone:",
                        style: 'contact'
                    },{
                        text: `${phone}`,
                        style: 'contact_content'
                    },{
                        text: "Email:",
                        style: 'contact'
                    }, {
                        text: `${email}`,
                        style: 'contact_content'
                    }]]
                ]
            },
            layout: 'noBorders'
        }
    ],
    styles: {
        banner: {
            fontSize: 9,
            color: '#FFFFFF',
            fillColor: '#61A4E0',
            margin: [0, 0, 0, 0]
        },
        name: {
            fontSize: 24,
            bold: true
        },
        contact: {
            fontSize: 13,
            bold: true,
            margin: [15, 0, 0, 0]
        },
        contact_content: {
            fontSize: 8,
            margin: [15, 0, 0, 0]
        },
        header: {
            bold: true,
            fontSize: 16,
            margin: [15, 0, 0, 0]
        },
        content: {
            margin: [15, 5, 0, 0]
        }
    },
    defaultStyle: {
        alignment: 'left',
        margin: [15, 0, 0, 0]
    }
};
  
// Pushing summary
docDefinition.content.push(
    {
        style: 'header',
        text: 'Summary',
        margin: [15, 10, 0, 0]
    },
    {
        style: 'header',
        canvas: [{ 
        type: 'line',
        x1: 0, 
        y1: 5, 
        x2: 480, 
        y2: 5, 
        lineWidth: 0.5
    }]},
    {
        style: 'content',
        text: `${summary}`
    }
);

// Pushing skills
docDefinition.content.push({
        style: 'header',
        text: 'Skill Highlights'
    },
    {
        style: 'header',
        canvas: [{ 
            type: 'line',
            x1: 0, 
            y1: 5, 
            x2: 480, 
            y2: 5, 
            lineWidth: 0.5
        }]},
    {
        style: 'content',
        ul: skills
});

// Pushing experience
docDefinition.content.push({
        style: 'header',
        text: 'Experience'
    },
    {
        style: 'header',
        canvas: [{ 
        type: 'line',
        x1: 0, 
        y1: 5, 
        x2: 480, 
        y2: 5, 
        lineWidth: 0.5
    }]},
{
    style: 'content',
    text: `${experience[0].title} - ${experience[0].date}`
    },
    {
        style: 'content',
        text: `${experience[0].company}, ${experience[0].location}`
    },
    {
        style: 'content',
        ul: experience[0].bulletins
});

// Pushing education
docDefinition.content.push({
        style: 'header',
        text: 'Education'
    },
    {
        style: 'header',
        canvas: [{ 
            type: 'line',
            x1: 0, 
            y1: 5, 
            x2: 480, 
            y2: 5, 
            lineWidth: 0.5
    }]},
    {
        style: 'content',
        text: `${education}`
    },
    {
        style: 'content',
        text: `${university}`
});

// Pushing languages
docDefinition.content.push( {
        style: 'header',
        text: 'Languages'
    },
    {
        style: 'header',
        canvas: [{ 
            type: 'line',
            x1: 0, 
            y1: 5, 
            x2: 480, 
            y2: 5, 
            lineWidth: 0.5
        }]},
    {
        style: 'content',
        type: 'none',
        ol: languages
});

// Pushing certifications
docDefinition.content.push({
        style: 'header',
        text: 'Certifications'
    },
    {
        style: 'header',
        canvas: [{ 
            type: 'line',
            x1: 0, 
            y1: 5, 
            x2: 480, 
            y2: 5, 
            lineWidth: 0.5
    }]},
    {
        style: 'content',
        type: 'none',
        ol: certifications
});

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('document.pdf'));
pdfDoc.end();