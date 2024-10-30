/*
Credit: https://stackoverflow.com/a/63783598
 */


( function( window, wp ){

    var link_id = 'copy-all-text-btn';

    var link_html = `
        <button id="${link_id}" class="components-button has-icon" aria-label="Copy all text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"/></svg>
        </button>
    `;

    var editorEl = document.getElementById( 'editor' );
    if( !editorEl ){ 
        return;
    }

    var unsubscribe = wp.data.subscribe( function () {
        setTimeout( function () {
            if ( !document.getElementById( link_id ) ) {
                var toolbalEl = editorEl.querySelector( '.edit-post-header-toolbar__left' );
                if( toolbalEl instanceof HTMLElement ){
                    toolbalEl.insertAdjacentHTML( 'beforeend', link_html );
                    toolbalEl.addEventListener('click',(e)=>{
                        blocks = editorEl.querySelector('div.editor-styles-wrapper');
                        navigator.clipboard.writeText(blocks.innerText.trim());
                        wp.data.dispatch("core/notices").createNotice(
                            "success", 
                            "Copied all text to the clipboard.",
                            {
                              type: "snackbar",
                              isDismissible: true,
                            }
                          );
                    
                    });
                }
            }
        }, 1 )
    } );

} )( window, wp )
