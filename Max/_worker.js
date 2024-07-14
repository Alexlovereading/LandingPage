// your MaxConv secret key
const SECRET = "shbsrp9v0e4jjrpvzoaoq9hueogaxd5u";

// how long LP will be available
const EXPIRES = 2 * 60 * 1000; // 2 minutes in milliseconds

// redirect users that try to access this LP directly to this URL (ie. you can put smartlink URL here)
const REDIRECT_URL        = 'https://2qumuk.mcgo2.com/visit/3cf3b676-075b-49a5-9745-c01816501512';  // ie. https://www.google.com/

// if the REDIRECT_URL is empty, show this safe page HTML to users that try to access this LP directly
const SAFE_PAGE_HTML      = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Thank You</title></head><body><h1>Thank You!</h1><p>Your submission has been received.</p></body></html>'; 

// in case you don't put an URL in REDIRECT_URL and you don't put a HTML under SAFE_PAGE_HTML the visitor will see a 'Access denied.' message if error occurs.





/* ------------ DO NOT MODIFY BELOW THIS LINE --------------------- */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const lpkey = url.searchParams.get("lp_key");
    const pathname = url.pathname;
    const filename = pathname.split('/').pop();


    // Request for a non HTML file? (images, scripts)
    if (filename && !filename.endsWith('.htm') && !filename.endsWith('.html')) {
        return env.ASSETS.fetch(request);
    }


    // SECRET empty?
    if( !SECRET ){
        return new Response('SECRET not defined.', { status: 403 });
    }


    // EXPIRES empty?
    if( !EXPIRES ){
        return new Response('EXPIRES not defined.', { status: 403 });
    }

    // GET param empty
    if (!lpkey) {
        if( REDIRECT_URL ){ const redirectResponse = new Response('Redirecting...', { status: 302, headers: { 'Location': REDIRECT_URL } }); return redirectResponse; } else if( SAFE_PAGE_HTML ){ return new Response(SAFE_PAGE_HTML, { headers: { 'Content-Type': 'text/html', }, }); } else { return new Response('Access denied.', { status: 403 }); }
    }


    const hash = lpkey.slice(0, 5) + lpkey.slice(10, 15) + lpkey.slice(20);
    const time = parseInt(lpkey.slice(5, 10) + lpkey.slice(15, 20), 10);

    const userAgent = request.headers.get('User-Agent');
    const calc      = await md5(SECRET + time + userAgent);

    const currentTime = Date.now();
    const time_diff   = (currentTime) - time * 1000;
    const time_passed = time_diff > EXPIRES;


    if ( calc !== hash ) {
        if( REDIRECT_URL ){ const redirectResponse = new Response('Redirecting...', { status: 302, headers: { 'Location': REDIRECT_URL } }); return redirectResponse; } else if( SAFE_PAGE_HTML ){ return new Response(SAFE_PAGE_HTML, { headers: { 'Content-Type': 'text/html', }, }); } else { return new Response('Access denied.', { status: 403 }); }
    }

    if ( time_passed ) {
        if( REDIRECT_URL ){ const redirectResponse = new Response('Redirecting...', { status: 302, headers: { 'Location': REDIRECT_URL } }); return redirectResponse; } else if( SAFE_PAGE_HTML ){ return new Response(SAFE_PAGE_HTML, { headers: { 'Content-Type': 'text/html', }, }); } else { return new Response('Access denied.', { status: 403 }); }
    }

    // Access granted, fetch from env.ASSETS
    return env.ASSETS.fetch(request);

    
  }
};

async function md5(string) {
  const buffer = new TextEncoder().encode(string);
  return crypto.subtle.digest('MD5', buffer).then(hash => {
    return Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
  });
}


/* ------------ DO NOT MODIFY ABOVE THIS LINE --------------------- */