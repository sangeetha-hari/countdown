document.querySelector('#dcount').innerText=10;
setTimeout(() => {
    document.querySelector('#dcount').innerText=9;
    setTimeout(() => {
        document.querySelector('#dcount').innerText=8;
        setTimeout(() => {
            document.querySelector('#dcount').innerText=7;
            setTimeout(() => {
                document.querySelector('#dcount').innerText=6;
                setTimeout(() => {
                    document.querySelector('#dcount').innerText=5;
                    setTimeout(() => {
                        document.querySelector('#dcount').innerText=4;
                        setTimeout(() => {
                            document.querySelector('#dcount').innerText=3;
                            setTimeout(() => {
                                document.querySelector('#dcount').innerText=2;
                                setTimeout(() => {
                                    document.querySelector('#dcount').innerText=1;
                                    setTimeout(() => {
                                        document.querySelector('#dcount').innerText="Happy Independence Day";
                                    },1000);
                                }, 1000);
                            }, 1000);
                        },1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);