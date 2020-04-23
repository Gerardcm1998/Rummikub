# UTILS

### importar pagines html dins d'altres
    <iframe src="???????????.html" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>