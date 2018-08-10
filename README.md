# Hillview: North Belfast
A website providing extensive information relating to a #BuildHomesNow campaign to secure social housing on a currently vacant and unused development site in north Belfast. 

Click [here](https://hillview-north-belfast.herokuapp.com/) to visit the site.

## Overview
**'Hillview: North Belfast'** aims to capitalise on recent media exposure (March 2018) of the campaign and provide further information which was not covered in the **BBC Spotlight documentary**. The site is designed with the intention of recruiting supporters and establishing new sources of information relevant to the campaign.

### What is this application for?
There are specific constituencies, with different interests and motivations, who are most likely to visit the site:
* members of the public
* journalists
* policy and research teams
* civil servants
* politicians

'Hillview: North Belfast' anticipates that the above groups will access the site for three specific reasons:
* to access **information** (to varying degrees)
* to take supportive **action**
* to **contact** the campaign

### What does it do?
The site's layout and functions were designed to satisfy the expectations of these diverse users. **Wireframes** and mockups can be found in the ['wireframes' folder](wireframes) of the directory

The website consists of seven pages, all of which **are directly accessible from the home page** which doubles up as a site navigation (accessible from every page through fixed floating 'Back' and 'Hamburger' icons)

All information is accessible within **three clicks**

**Information is presented in progressively larger amounts**, accessible at the user's discretion (reachable through a) modals, b) links, c) Resources page)

**Information is provided through a wide range of formats** (introductory synopsis, links to articles in external publications, embedded youtube videos, audio downloads of relevant media interviews and downloadable freedom of information documents and campaign materials, reports and infographs)

Users are encouraged to **take action** through a number of small but useful avenues: 
* **following** the campaign's social media profiles
* adopting the campaign logo as user's **temporary twitter profile image**, and getting in touch with campaign organisers to **provide or access information** related to housing inequality

A 'Contact Us' page provides **direct email service** to contact campaign organisers

**Large fonts & imagery** are used to convey the campaign message with simplicity and clarity while a quality UX.

### How does it work
The website is written in **HTML** and styled with **CSS** and **Bootstrap**. The Bootstrap grid layout is used to make the application responsive across mobile, tablet and desktop devices. The site is designed using **mobile-first** design principles.

Information is available on the site through **embedded Youtube videos**, **pdf**, **png** and **mp3** downloads and **links** to external articles.

Users can contact the Equality Can't Wait campaign by sending an email directly from the site using **EmailJS** service.

**AWS Cloud9** was used as the IDE. The files [index.php](index.php) and [composer.json](composer.json) were included in the directory to enable deployment on the cloud application platform **Heroku**.  

## Technology Used

### Code
- **HTML**, **CSS**
    - Base languages used to create website
- [EmailJS](http://www.emailjs.com/)
    - Allows users to send emails to the Equality Can't Wait email using client side technologies and EmailJS's Javascript library
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap 3.3.7** is used to render a responsive layout

### Hosting
- [Heroku](https://www.heroku.com/)
    - The Cloud Application Platform **Heroku** hosts the Hillview: North Belfast.

## Testing 
The [WC3 Validator Service](https://validator.w3.org/) was used to test HTML and CSS language. An error regarding the nesting of ``<li>`` elements with ``<a>`` elements was ignored to be able to create hover affects across the entire panels on the Home, Fatcs, Impact and Resources pages.

The site was tested manually by going through each page and checking that the following were working:
* the **bootstrap effects** (e.g. fade in & out, open and scroll modals, dropdown panel)
* **internal links** to navigate the site correctly
* **links to external sites** (including **twitter**, **facebook** and **youtube**)
* embedded youtube **videos**

**"Hillview: North Belfast"** was tested in the following browsers:
* Chrome
* Firefox
* Microsoft Edge
* Opera

## Getting the code up and running
1. Clone this repository by opening your Terminal, change the current working directory to the location where you want the cloned directory to be made.  
2. Type `$ git clone https://github.com/Deasun/equality-cant-wait.git`  and hit Enter. Your repository will be ready.
3. Run the ```index.html```, open in a broswer and the page will display

## Contributing
* We welcome all contributions to improving our code and accept pull requests. 
* There is an outstanding bug in the code. The centre panels jump slightly when the modals are opened. 'overflow-y' and 'padding' styles are applied to ```.modal-open``` and ```html``` to minimise disruption. 

## Credits

### Media and Reports
The sources for all the media and reports, either provided as a link to an external site or saved in the directory and available for download, are referenced. 

### Developer
Dessie Donnelly (email: des_donn@mailbox.org)

### Partners
Equality Can't Wait & #BuildHomesNow campaign C/O PPR, Ground Floor, Community House, Citylink Business Park
6A Albert Street, Belfast, BT12 4HQ (tel: 028 90313315)
Contact: Elfie Seymour (email: elfie@pprproject.org)

