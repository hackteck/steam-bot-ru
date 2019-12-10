export default src => {
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.defer = true;
        script.async = true;
        document.getElementsByTagName('head').item(0).appendChild(script);
        //handle events
        script.onload = resolve;
        script.onerror = reject;
    })
}