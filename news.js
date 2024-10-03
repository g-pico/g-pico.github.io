// news.js

const news = {
    news1: {
        title: "g-Pico finally getting ready for the market!",
        subtitle: "Finally, g-Pico is Here!",
        subtitleColor: "#007bff", // 設置副標題顏色，例如藍色
        content: `
            <p>After two years of cooking, g-Pico has finally launched, and we couldn't be more excited!</p>
            <p>As engineers in Taiwan, we've often found ourselves bogged down by routine tasks, searching for ways to improve
            efficiency. Through data collection and analysis in our daily work, we began to truly appreciate the power
            of automation. This sparked a passion in us to develop and promote automated solutions that could make
            life easier for everyone.</p>

            <p>Starting with no knowledge of Python, we've spent the past two
             years working relentlessly to build and refine the g-Pico system.
              Today, we're thrilled to see it finally ready to launch, opening 
              doors to new possibilities in automation.
            </p>

            <p>We are filled with hope for the future and eager to share the 
            benefits of automation with others. Our goal is to help everyone 
            lead more efficient and fulfilling lives through technology. This 
            is just the beginning!
            </p>

            <p>We are deeply grateful to everyone who has helped us along the 
            way, as well as the online resources that supported us. We will try 
            our best to make people's lives better.
            </p>
        `,
        image: "party_time_pico_release.webp"
    },
    news2: {
        title: "Story about g-Pico",
        subtitle: "This is how everyting start~",
        subtitleColor: "#0fcccc", // 設置副標題顏色，例如橙色 #ff5733

        // 在這裡，<span> 裡的內容會被浮動到右邊。這種方式簡單直接，適合短文本的右對齊。
        // <p>We are excited to announce our new partnership... <span style="float: right;">- The Team</span></p>

        // 如果你想讓右對齊的內容單獨占用一行，可以用 <div> 並設置 text-align: right;。這種方式可以讓文字更具獨立性，不會和段落的其他部分擠在一起：
        //<p>We are excited to announce our new partnership...</p>
        //<div style="text-align: right;">- The Team</div>


        content: `
            <p>我是一名台灣的工程師，曾經在德州儀器擔任過3年的FAE，現在則是在台灣
            本土的IC設計公司擔任系統與應用工程師。隨著經驗的累積，我逐漸意識到自動
            化在工作中的重要性。自動化不僅能提升實驗速度，確保實驗手法的一致性，還
            能增加實驗的覆蓋範圍。更重要的是，它能解放工程師的雙手，讓我們能專注於
            數據的分析。自動化的數據整理也對分析工作有極大的幫助。</p>
            <br>

            <p>因此，我決定學習並改良自動化技術，整合自動化的驗證系統，並搭配高效
            的自動化數據整理系統，將數據系統化地整理，方便後續分析。我逐步開發了
            g-Pico的自動化全方位解決方案，從一般的治具操作，到自動化實驗、自動化
            數據整理與分析，都進行了整合。</p>
            <br>

            <p>我的目標是開發出一套即使是初學者或不懂程式的人也能夠透過圖形化GUI
            來操作的系統，並將這套系統推廣給有類似需求的工程師或使用者們。希望能
            幫助大家解放雙手，把時間花在更重要的事情上，除了對數據的分析和理解，
            更可以追求自己的熱情，以及尋找其他的人生意義。</p>
            <br>

            <p>展望未來，我希望讓更多人了解自動化帶來的幫助，並願意使用它來改善
            生活。我計畫藉由系統化地蒐集和整理資料，搭配目前的AI技術，利用機器
            學習進行進階的數據分析和應用。我相信，這不僅能提升工作效率，還能為
            產業帶來新的可能性。</p>
            <br>

            <p>這一路走來，雖然在整合軟硬體的過程中時常遇到困難，但我總期待能
            從自己的手創造出讓人覺得好用的工具。我期待著與更多志同道合的朋友
            一起，共同創造一個更高效、更美好的未來。</p>
            <br>
            </p><span style="float: right;"> Gary Chu 2024/10/04 </span></p>
            <br>
            <br>
            <br>
            <br>

            

            <p>I am an engineer in Taiwan. I previously worked as an FAE
             at Texas Instruments for three years, and now I serve as a 
             system and application engineer at a local IC design company
              in Taiwan. As my experience accumulated, I gradually realized
               the importance of automation in work. Automation not only 
               enhances experiment speed and ensures consistency in 
               experimental methods but also increases the coverage of 
               experimental conditions. More importantly, it frees engineers' 
               hands, allowing us to focus on data analysis. Automated data 
               organization also greatly aids in the analysis process.</p>
            <br>

            <p>Therefore, I decided to learn and improve automation technologies
            , integrating automated verification systems and coupling them 
            with efficient automated data organization systems to 
            systematically organize data for easier subsequent analysis. 
            I gradually developed a total automation solution called g-Pico, 
            integrating everything from general fixture operations to automated
             experiments, automated data organization, and analysis.</p>
            <br>

            <p>My goal is to develop a system that even beginners or those who 
            don't understand programming can operate through a graphical GUI, 
            and promote this system to engineers or users with similar needs. 
            I hope to help everyone free their hands and spend time on more 
            important things—not only in data analysis and understanding but 
            also in pursuing their passions and finding other meanings 
            in life.</p>
            <br>

            <p>Looking ahead, I hope to let more people understand the benefits
             that automation brings and be willing to use it to improve their
              lives. I plan to systematically collect and organize data, 
              leveraging current AI technologies, and use machine learning
               for advanced data analysis and applications. I believe this
                will not only improve work efficiency but also bring new
                 possibilities to the industry.</p>
            <br>

            <p>Throughout this journey, although I often encounter 
            difficulties in integrating software and hardware, I always
             look forward to creating useful tools with my own hands. 
             I look forward to working with more like-minded friends 
             to create a more efficient and better future together.</p>
            <br>

            </p><span style="float: right;"> Gary Chu 2024/10/04 </span></p>
            <br>
            <br>
            <br>


        `,
        image: "assets/pic/story_f2.png"
    },
    // 新增其他新聞項目
};
