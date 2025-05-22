/* eslint-disable react/no-unescaped-entities */
import cashblasthero from "../assets/img/cashblasthero.png"

import designsystem1 from "../assets/img/designsystem-1.png";
import designsystem2 from "../assets/img/designsystem-2.png";
import designsystem4 from "../assets/img/designsystem-4.png";
import cashblastsystem1 from "../assets/img/cashblastsystem1.png";
import cashblastsystem2 from "../assets/img/cashblastsystem2.png";
import cashblastsolutions1 from "../assets/img/cashblastsolutions1.png";
import cashblastsolutions2 from "../assets/img/cashblastsolutions2.png";
import cashblastsolutions3 from "../assets/img/cashblastsolution3.png";
import cashblastsolutions4 from "../assets/img/cashblastsolution4.png";
import cashblastwallet1 from "../assets/img/cashblastwallet1.png";
import cashblastwallet2 from "../assets/img/cashblastwallet2.png";
import cashblastwallet3 from "../assets/img/cashblastwallet3.png";
import cashblastscreen1 from "../assets/img/cashblastscreen1.png";
import cashblastscreen2 from "../assets/img/cashblastscreen2.png";
import cashblastscreen3 from "../assets/img/cashblastscreen3.png";
import Button from "../components/Button";

import Backbutton from "../components/Backbutton";
import greenblur from "../assets/img/greenblur.png";


const Cashblast = () => {
  return (
    <>
    
    <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
      <img className="absolute -top-2/4 -left-1/4" src={greenblur} alt="img" />

      <div className="fixed z-50">
       <Backbutton/>
      </div>

      <img src={cashblasthero} className="pt-20 w-full mx-auto" alt="abt"/>

      <div className="pt-16 md:pt-28">
        <p className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-5 sm:pb-10">Overview</p>
        <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
          CashBlast is a product with a goal to solve the problem of mutilating the Nigerian currency while preserving the cherished tradition 
          of "spraying" money at events. With CashBlast, guests can digitally spray money, maintaining the celebratory atmosphere without
          mutilating the Nigerian currency.
        </p>
      </div>

      <div className="pt-16 md:pt-28">
        <p className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-5 sm:pb-10">The Problem</p>
        <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
          In many Nigerian celebrations, it is traditional for hosts to be honored by guests who "throw" money at them. 
          While this custom adds a festive touch to events, it leads to several problems, including the physical damage 
          and mutilation of currency. To combat this issue, the Nigerian government has made this practice illegal, 
          aiming to preserve the integrity of the nation's currency. However, this prohibition poses a challenge for 
          those wishing to uphold this vibrant tradition.
        </p>
      </div>

      <div className="pt-16 md:pt-28">
        <p className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-5 sm:pb-10">Key Requirements</p>
        <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal">
          The Cashblast concept is addressing the fact that the “feel” of physically spraying money is not taken away from the experience. 
          To achieve this, there is a dependency on a big screen being present at an event that the app is being used. 
          The big screen will display the names of people that have joined the dance floor to “spray”, the amount they have sprayed, 
          and a leaderboard showing the ranking of the people who have sprayed the most money. 
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-x-10 gap-y-8 pb-14 pt-20">
        <div className="max-w-[550px] mr-20">
          <p className=" text-white text-[35px] sm:text-[40px] font-bold leading-[26px] pb-10">Big Screen:</p>
          <ul className="list-disc text-[20px] sm:text-[30px] text-[#CCCCCC] font-normal pl-10 md:pl-20">
            <li className="leading-10 md:leading-[50px] pb-5">Should show a unique event code / QR code for people to join, along with information they need to get in the “dance floor</li>
            <li className="leading-10 md:leading-[50px] ">When people go to the link and enter the event code on their phone, they should appear on the screen with the name they have chosen to use to join the dance floor. </li>
                                                   
          </ul>
                        
        </div>

        <div className="max-w-[550px]">
          <p className=" text-white text-[40px] font-bold leading-[26px] pb-0 sm:pb-10">&nbsp;</p>
          <ul className="list-disc text-[20px] sm:text-[30px] text-[#CCCCCC] font-normal pl-10 md:pl-20">
            <li className="leading-10 md:leading-[50px] pb-5">Should show an event name / hashtag. </li>
            <li className="leading-10 md:leading-[50px] pb-5">As people are “spraying money” from their phones, the big screen should show the amounts being sprayed by each person. </li> 
            <li className="leading-10 md:leading-[50px] pb-5">The currency is naira</li> 
          </ul>
        </div>
                    
      </div>

      <div className="flex md:flex-row flex-col gap-x-10 gap-y-8 pb-14 pt-16">
        <div className="max-w-[550px] mr-20">
          <p className="text-white text-[35px] sm:text-[40px] font-bold leading-[26px] pb-10">Mobile Web App:</p>
          <ul className="list-disc text-[20px] sm:text-[30px] text-[#CCCCCC] font-normal pl-10 md:pl-20">
            <li className="leading-10 md:leading-[50px] pb-5">Users should be able to create an account on the web app with their full name, email and phone number. </li>
            <li className="leading-10 md:leading-[50px] pb-5">Users should have a wallet that they can easily fund through bank accounts or cards. </li>
            <li className="leading-10 md:leading-[50px] pb-5">They should be able to join a party by entering the party code and a nickname to use. </li>
            <li className="leading-10 md:leading-[50px] pb-5">When they join a party, they should be able to pick the denomination they want to use in “spraying” money (N100. N200, N500, N1,000). </li>
            <li className="leading-10 md:leading-[50px] pb-5">If a non-user (someone without an account) joins a party using the party code, they should be prompted to create their account and load their wallet to start spraying. </li>
          </ul>
                        
        </div>

        <div className="max-w-[550px]">
          <p className=" text-white text-[40px] font-bold leading-[26px] pb-0 sm:pb-10">&nbsp;</p>
          <ul className="list-disc text-[20px] sm:text-[30px] text-[#CCCCCC] font-normal pl-10 md:pl-20">
            <li className="leading-10 md:leading-[50px] pb-5">Users should be able to load more money into their wallet when needed.  </li>
            <li className="leading-10 md:leading-[50px] pb-5">When the wallet is empty, they should not be able to spray until they reload the wallet.</li> 
            <li className="leading-10 md:leading-[50px] pb-5">Users should also be able to create an “event” from their account. </li> 
            <li className="leading-10 md:leading-[50px] pb-5">Each party should have a unique code that other users can use to join the party.</li> 
            <li className="leading-10 md:leading-[50px] pb-5">If a non-user (someone without an account) joins a party using the party code, they should be prompted to create their account and load their wallet to start spraying. </li> 
          </ul>
        </div>
                    
      </div>
            
    </section>

    <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
      <p className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-5 sm:pb-10">Design System</p>
      <p className="text-[20px] sm:text-[30px] leading-[40px] sm:leading-[50px] text-[#CCCCCC] font-normal pb-10">
        The next plan of action was to work on a design system which includes the style guide and necessary components needed to
        help communicate the brand’s identity and also give the product an exciting feel
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
        <img className="w-full h-auto object-cover" src={designsystem1} alt="" />
        <img className="w-full h-auto object-cover" src={designsystem2} alt="" />
        <img className="w-full h-auto object-cover" src={designsystem4} alt="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img  className="w-full h-auto object-cover" src={cashblastsystem1} alt="" />
        <img  className="w-full h-auto object-cover" src={cashblastsystem2} alt="" />
        <div>&nbsp;</div>
               
      </div>

    </section>

    <section className="max-w-[1300px] w-full mx-auto pt-[150px] px-5 font-dmsans">
      <h2 className="text-[50px] sm:text-[60px] md:text-[80px] font-bold pb-10">Design Solutions</h2>

      <div className="flex flex-col md:flex-row items-center pb-28 max-w-[1200px] mx-auto gap-x-10">
          <div className="max-w-[680px] w-full pr-10">
              <p className="text-[25px] sm:text-3xl text-[#1D4ED8] leading-10 font-bold pb-5 tracking-wider">Seamless Onboarding Flow</p>
              <p className="leading-10 text-[20px] sm:text-[22px] text-[#cccccc] font-normal pb-20">
                The primary goal for users on Cashblast is to effortlessly create an event and invite their guests to join. 
                Hence, it was important that I streamlined this process to ensure a smooth and intuitive experience.
                To set up an account, users simply need to provide their email address, phone number, and create a password. 
                This minimal setup allows users to quickly get started with creating their events, making the platform accessible
                and user-friendly.
              </p>

          </div>

          <div className="max-w-[580px]">
            <img className="w-full" src={cashblastsolutions1} alt="lof1" />
          </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center pb-20  max-w-[1200px] mx-auto gap-x-10 justify-between">
        <div className="max-w-[400px]">
          <img className="w-full" src={cashblastsolutions2} alt="lof1" />
        </div>

        <div className="max-w-[650px] w-full">
          <p className="text-[25px] sm:text-3xl text-[#1D4ED8] leading-10 font-bold pb-5 tracking-wider">Home Screen</p>
          <p className="leading-10 text-[20px] sm:text-[22px] text-[#cccccc] font-normal pb-10 sm:pb-20">
            On the home screen, users can either create an event or join an event. 
            If they choose to create an event, they will be directed to the event creation page. 
            If they opt to join an event, they will be advised to switch to their mobile device by scanning a barcode. 
            They will then be directed to the join event page.
         </p>

        </div>

      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pb-28 max-w-[1200px] gap-x-10 mx-auto">
          <div className="max-w-[680px] w-full pr-10">
              <p className="text-[25px] sm:text-3xl text-[#1D4ED8] leading-10 font-bold pb-5 tracking-wider">Creating An Event</p>
              <p className="leading-10 text-[20px] sm:text-[22px] text-[#cccccc] font-normal pb-10 sm:pb-20">
                To create an event, users need to enter the event title, hashtag, choose a date, and upload an image. 
                Once these details are provided, a unique event code will be generated. 
                This code allows guests to join the event on the specified date, 
                ensuring a seamless and organized experience for all participants.
              </p>

          </div>

          <div className="max-w-[550px]">
            <img className="w-full" src={cashblastsolutions3} alt="lof1" />
          </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-x-10 pb-10 sm:pb-20 max-w-[1200px] mx-auto">
        <div className="">
          <img className="w-full" src={cashblastsolutions4} alt="lof1" />
        </div>

        <div className="max-w-[680px] w-full">
          <p className="text-[25px] sm:text-3xl text-[#1D4ED8] leading-10 font-bold pb-5 tracking-wider">Joining An Event</p>
          <p className="leading-10 text-[20px] sm:text-[22px] text-[#cccccc] font-normal pb-10 sm:pb-20">
            To join an event, users have two options for seamless access. They can either scan a barcode or they can manually enter the 
            unique event code provided by the host. This will instantly connect them to the event, This dual approach ensures that 
            users can quickly and easily join the celebration, whether they prefer the convenience of scanning or the simplicity of 
            entering a code.
         </p>

        </div>

      </div>


    </section>

    <section className="max-w-[1300px] w-full mx-auto pt-[120px] px-5 font-dmsans">
      <p className="text-[25px] sm:text-3xl text-[#1D4ED8] leading-10 font-bold pb-5 tracking-wider">Funding A Wallet</p>
      <p className="leading-10 text-[20px] sm:text-[22px] text-[#cccccc] font-normal pb-10 sm:pb-20">
        After joining an event, the next step for users is to fund their wallets to start spraying. 
        Users have access to two types of wallets: an event wallet and a spray wallet. The event wallet is 
        exclusively for event creators. Any funds received from being sprayed during their event are deposited 
        into this wallet. On the other hand, the spray wallet is funded directly by users through debit card payments 
        or bank transfers, specifically for the purpose of spraying money at events. It’s important to note that users
         cannot use funds from their event wallet for spraying; only the spray wallet can be used for this activity.
      </p>

      
      <div className="flex flex-col md:flex-row items-center pb-20 mx-auto gap-10">
        <div className="max-w-[600px] w-full">
          <img src={cashblastwallet1} alt="lof1" />
        </div>

        <div className="max-w-[450px] w-full">
          <img src={cashblastwallet2} alt="lofi" />
        </div>

      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-10 pb-28 max-w-[1200px] gap-x-14 mx-auto">
          <div className="w-full max-w-[700px] pr-10">
              <p className="text-[25px] sm:text-3xl text-[#1D4ED8] leading-10 font-bold pb-5 tracking-wider">The Actual Spraying Procees</p>
              <p className="leading-10 text-[20px] sm:text-[22px] text-[#cccccc] font-normal pb-10 sm:pb-20">
                After users have funded their wallets, entered the amount they intend to spray, 
                and selected the denomination, they are directed to the Spray Room which is like a 
                digital dance floor. In the Spray Room, users can see their spray balance and a large circular button 
                to start spraying. The more they tap the button, the more they spray. For example, a user who chooses 
                to spray in 500 Naira denominations would need to tap the button 10 times to spray a total of 5,000 Naira. 
                This interactive feature ensures users get the authentic feel of physically spraying money, enhancing their 
                overall experience.
              </p>

          </div>

          <div className="w-full md:w-[350px]">
            <img className="max-h-[550px]" src={cashblastwallet3} alt="lof1" />
          </div>
      </div>

      <p className="text-[25px] sm:text-3xl text-[#1D4ED8] leading-10 font-bold pb-5 tracking-wider">The Big Screen</p>
      <p className="leading-10 text-[20px] sm:text-[22px] text-[#cccccc] font-normal pb-10 sm:pb-20">
        The big screen prominently displays essential event details, including the total number of guests currently joined, 
        a scannable barcode, and the unique event code. It also features a leaderboard showcasing the top 5 highest sprayers. 
        As users spray money from their mobile devices, their names and the amounts they spray are dynamically displayed on the 
        big screen, keeping everyone engaged and informed in real-time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
        <div>
          <img className="w-full h-auto object-cover pb-7" src={cashblastscreen1} alt="" />               
        </div>
                
        <div>
          <img className="w-full h-auto object-cover pb-7" src={cashblastscreen2} alt="" />   
        </div>

        <div>
          <img className="w-full h-auto object-cover pb-7" src={cashblastscreen3} alt="" />                  
        </div>

      </div>

    </section>

    <section className="max-w-[1300px] mx-auto pb-20 px-5 pt-32">
      <div className="bg-[#1A1A1A] px-10 py-16 rounded flex flex-col md:flex-row md:justify-between justify-center items-center gap-4">
        <div className="pr-20">
          <p className="text-2xl text-white font-normal pb-5">A link to the live version:</p>
          <a href="https://www.mycashblast.com/" className="text-3xl md:text-6xl text-[#1D4ED8] font-semibold tracking-wide" target="_blank">Cashblast Website</a>
        </div>
      </div>

      <div className="flex flex-col text-center mx-auto py-14">
        <p className="text-[40px] md:text-[60px] pb-2 sm:pb-5">Thank You For Viewing</p>
        <p className="text-[35px] md:text-5xl pb-5 text-[#CCCCCC]">Charles Emmanuel</p>
        <p className="text-2xl pb-10 text-[#CCCCCC]">Product Designer</p>

        <Button text="View my other works" classname="mx-auto max-w-[300px] bg-[#8338EA] hover:bg-[#8338EA]/90 md:px-[40px] md:py-[18px] text-[14px] sm:text-[16px] md:text-[20px] px-[25px] py-[15px] tracking-wider"/>

      </div>

    </section>
    
    </>
  )
}

export default Cashblast