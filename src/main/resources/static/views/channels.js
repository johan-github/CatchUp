


export default{
    components:{
        

    },

    //************************************************************** */


    template:`
        <div>

        <div>
            <form id="channelAddBox" action="/action_page.php">
                <input id="channelAddBoxTextField" type="text" placeholder="Channel name...">

                <label id="channelAddBoxMembersLabel" for="members">Friends</label>
                <select id="channelAddBoxMembers" name="member">
                    <option value="helena">Helena</option>
                    <option value="alberts">Alberts</option>
                    <option value="tobbe">Tobbe</option>
                    <option value="johan">Johan</option>
                    <option value="matthias">Matthias</option>
                    <option value="hassan">Hassan</option>
                </select>
            
                <input id="channelAddBoxAddButton" type="submit" value="➕ Create channel">
            </form>

            <div id="channelBox">
                <div id="channelBoxChannelPic"></div>
                <div id="channelBoxChannelName">Only The Goos Ones Channel</div>
                <div id="channelBoxChannelCreate">JOIN✔️</div>
                <div id="channelBoxChannelMessageTime">Created 2020-03-16 01:05</div>
                <div id="channelBoxChannelMessage">#Alberts #Matthias #Tobbe</div>
            </div>

            <div id="channelBox">
                <div id="channelBoxChannelPic"></div>
                <div id="channelBoxChannelName">Coders Delux</div>
                <div id="channelBoxChannelCreate">JOIN✔️</div>
                <div id="channelBoxChannelMessageTime">Created 2020-03-16 01:05</div>
                <div id="channelBoxChannelMessage">#Alberts #Matthias #Tobbe</div>
            </div>

            <div id="channelBox">
                <div id="channelBoxChannelPic"></div>
                <div id="channelBoxChannelName">Cars for the win</div>
                <div id="channelBoxChannelCreate">JOIN✔️</div>
                <div id="channelBoxChannelMessageTime">Created 2020-03-16 01:05</div>
                <div id="channelBoxChannelMessage">#Alberts #Matthias #Tobbe</div>
            </div>

            <div id="channelBox">
                <div id="channelBoxChannelPic"></div>
                <div id="channelBoxChannelName">Kliar i magis</div>
                <div id="channelBoxChannelCreate">JOIN✔️</div>
                <div id="channelBoxChannelMessageTime">Created 2020-03-16 01:05</div>
                <div id="channelBoxChannelMessage">#Alberts #Matthias #Tobbe</div>
            </div>

        </div>
    `,

}