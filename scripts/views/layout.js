const Layout = (function(){
    const template =`
       ${Header}
       ${Sidebar}
       `;
       return {
        toString(){
            return template
        }
       } 
    }
)();