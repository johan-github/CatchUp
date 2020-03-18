import navbar from './components/navbar.js'


export default{
    components:{
        navbar
    },


    template:`

<!--
        <div class="clickToShowInfo">
	Click here for more info
	<div class="info">
		More info!
	</div>
</div>-->

        <section id="appContainer">

            <div id="appButton">
                <h3>| | |</h3>

                <div id="appNav">
                    <navbar/>
                </div>

                
            </div>

            

            <main id="appMain">
                <router-view/>
            </main>
            
        </section>
    
    `,
}