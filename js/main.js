
function Books(props){
    return(
        <div class="card" id="list">
        <img class="book" src={props.image} />
        <div class="buttons"><a href={props.details}>Details </a>|<a href={props.preview}> Preview</a></div>
        <div class="bookdetails">
        <p class="title">{props.title}</p>
        <p>{props.author}</p>
        </div>
        </div>
    );
}
ReactDOM.render(
    <div>
        
        <Books
        image="https://books.google.com.ph/books/publisher/content?id=IVToDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73apqhlKupri_zeX8nmKeWPjZ-pWPt2odLedSC4vyfuJTYR4AOp7UDNuZyUWaDPIpHv5W4cyIgnPqyHqo0PBnfN_zuGFmRxL8YfNjamM6bFKpcCf7HpD6HuiKiruiJhJ50Xp1EI"
        details=""
        preview="https://books.google.com.ph/books?id=IVToDQAAQBAJ&printsec=frontcover&dq=intitle:Life+of+a+worm&hl=&as_pt=BOOKS&cd=15&source=gbs_api#v=onepage&q=intitle%3ALife%20of%20a%20worm&f=false"
        title="A LIFE FOR GOD"
        author="RABBI GREG HERSHBERG"
        />
        <Books
        image="https://books.google.com.ph/books/publisher/content?id=uUMQEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71iJ6Lk1vlZLctbK9uePsI_YXZTqcB2Tvlc13IIWVX8nkmek3CwX74tBwn5uJUVw6yNFxR1mG-ET4egd8mob1MZ-JK2MxV9fMA9sBYRCTtVMNOWOFMJfBI8oGc2gyhUHUy2pAfm"
        preview="https://books.google.com.ph/books?id=uUMQEAAAQBAJ&printsec=frontcover&dq=intitle:react+js&hl=&as_pt=BOOKS&cd=17&source=gbs_api#v=onepage&q=intitle%3Areact%20js&f=false"
        title="FULL-STACK REACT, TYPESCRIPT, AND NODE"
        author="DAVID CHOI"
        />
        <Books
        image="https://books.google.com.ph/books/publisher/content?id=LjbnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73PbwJw7gkXUJi-NGgQViMS3uwJFRcp3tLpHZjIc90J7_HvJokWrlPS2H5JUyOu-dAdj0QLHSuLWkMyNp5Z9VIfCICqY-9q5EQZD0tU_izEKBTWifXXSMH9p9SaqjDic-HCeRw0"
        preview="https://books.google.com.ph/books?id=LjbnDwAAQBAJ&printsec=frontcover&dq=intitle:rainbows&hl=&as_pt=BOOKS&cd=15&source=gbs_api#v=onepage&q&f=false"
        title="WHAT IF RAINBOWS WERE YOUR SHADOWS?"
        author="ANUSHA VELUSWAMY"
        />
        <Books
        image="https://books.google.com.ph/books/publisher/content?id=EacxEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71hG4izHdgCmfN7gIgAo6Fd18JtIBWS2lD6nqobGCzRATm4pVXfgRTrH4hI8gbfqcm1i5RyJiLYdJD04XOFgHQ49pEn1Iv-m4U_A5d8KDizxCuMzeG5yR9PJhfCKvXA9_rCTyyw"
        preview="https://books.google.com.ph/books?id=EacxEAAAQBAJ&printsec=frontcover&dq=intitle:An+Introduction+to+Neural+Science&hl=&as_pt=BOOKS&cd=2&source=gbs_api#v=onepage&q&f=false"
        title="MACHINE LEARNING ALGORITHMS FOR DATA SCIENTISTS: AN OVERVIEW"
        author="VINAITHEERTHAN RENGANATHAN"
        />
       <Books
        image="https://books.google.com.ph/books/publisher/content?id=IG3yCAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72_avsdwRoMAlYwa3iPnXJwTTAwtEHODSjSr9Sj10D1LqGkXms4EffL_plIm_mV3SdpiFK8RdVBM0k104Zwh2sfQZqxAneYxjxcfzK0husf_-Qc6DE8uZYE2DZCGvjmNlBZO2KF"
        preview="https://books.google.com.ph/books?id=IG3yCAAAQBAJ&pg=PA371&dq=intitle:Structure+and+Space+CAROL+WINTER&hl=&as_pt=BOOKS&cd=2&source=gbs_api#v=onepage&q=intitle%3AStructure%20and%20Space%20CAROL%20WINTER&f=false"
        title="THE POPULATION STRUCTURE OF VEGETATION"
        author="J. WHITE"
        />
        <Books
        image="https://books.google.com.ph/books/content?id=pPpEevimh-cC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70v3ob09joxeLfSIKu7lhTP5kcA21424s-Z7WQjD53xr6_GK8rA1APqRg_jyJ5yf_hp0Z4UQJW9Q8wzzdvXO6HvW0MlW2KLVZmWnNzWh2Ee3tng4IWC9qA2d3BXYU6tgen7HAbo"
        details=""
        preview="https://books.google.com.ph/books?id=pPpEevimh-cC&pg=PA39&dq=intitle:9+lives+ANDREW+HUDSON&hl=&as_pt=BOOKS&cd=1&source=gbs_api#v=onepage&q=intitle%3A9%20lives%20ANDREW%20HUDSON&f=false"
        title="LITERATURE AFTER 9/11"
        author="JEANNE FOLLANSBEE QUINN"
        />
        <Books
        image="https://books.google.com.ph/books/publisher/content?id=LjbnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73PbwJw7gkXUJi-NGgQViMS3uwJFRcp3tLpHZjIc90J7_HvJokWrlPS2H5JUyOu-dAdj0QLHSuLWkMyNp5Z9VIfCICqY-9q5EQZD0tU_izEKBTWifXXSMH9p9SaqjDic-HCeRw0"
        preview="https://books.google.com.ph/books?id=LjbnDwAAQBAJ&printsec=frontcover&dq=intitle:rainbows&hl=&as_pt=BOOKS&cd=15&source=gbs_api#v=onepage&q&f=false"
        title="WHAT IF RAINBOWS WERE YOUR SHADOWS?"
        author="ANUSHA VELUSWAMY"
        />
        <Books
        image="https://books.google.com.ph/books/publisher/content?id=IG3yCAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72_avsdwRoMAlYwa3iPnXJwTTAwtEHODSjSr9Sj10D1LqGkXms4EffL_plIm_mV3SdpiFK8RdVBM0k104Zwh2sfQZqxAneYxjxcfzK0husf_-Qc6DE8uZYE2DZCGvjmNlBZO2KF"
        preview="https://books.google.com.ph/books?id=IG3yCAAAQBAJ&pg=PA371&dq=intitle:Structure+and+Space+CAROL+WINTER&hl=&as_pt=BOOKS&cd=2&source=gbs_api#v=onepage&q=intitle%3AStructure%20and%20Space%20CAROL%20WINTER&f=false"
        title="THE POPULATION STRUCTURE OF VEGETATION"
        author="J. WHITE"
        />
        <Books
        image="https://books.google.com.ph/books/publisher/content?id=uUMQEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71iJ6Lk1vlZLctbK9uePsI_YXZTqcB2Tvlc13IIWVX8nkmek3CwX74tBwn5uJUVw6yNFxR1mG-ET4egd8mob1MZ-JK2MxV9fMA9sBYRCTtVMNOWOFMJfBI8oGc2gyhUHUy2pAfm"
        preview="https://books.google.com.ph/books?id=uUMQEAAAQBAJ&printsec=frontcover&dq=intitle:react+js&hl=&as_pt=BOOKS&cd=17&source=gbs_api#v=onepage&q=intitle%3Areact%20js&f=false"
        title="FULL-STACK REACT, TYPESCRIPT, AND NODE"
        author="DAVID CHOI"
        />
        <Books
        image="https://books.google.com.ph/books/publisher/content?id=IVToDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73apqhlKupri_zeX8nmKeWPjZ-pWPt2odLedSC4vyfuJTYR4AOp7UDNuZyUWaDPIpHv5W4cyIgnPqyHqo0PBnfN_zuGFmRxL8YfNjamM6bFKpcCf7HpD6HuiKiruiJhJ50Xp1EI"
        details=""
        preview="https://books.google.com.ph/books?id=IVToDQAAQBAJ&printsec=frontcover&dq=intitle:Life+of+a+worm&hl=&as_pt=BOOKS&cd=15&source=gbs_api#v=onepage&q=intitle%3ALife%20of%20a%20worm&f=false"
        title="A LIFE FOR GOD"
        author="RABBI GREG HERSHBERG"
        />
        
    </div>,
    document.getElementById('app')
);

