import React, { useState } from 'react';
import './ProfilePage.css'

const ProfilePage = () => {

    const userProfileImages =[
        {
            id: 1,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABV7uLegi1BOvEneuUG7DavpEkdlHLuUEXmby2jgEA7n8V5LgcFu1o-NlMgJFznEX3Qt8-q7_t8ejt22-fz9LP_lJM6OKNQRpOA.png',

        },
        {
            id: 2,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYbCADmiYK_fcQ8ZA9koqz7qU6-LsrphCt83p9_Qu5Y2iH0mAs3dj-UISutqdiOmlqnuU4WoDc5YChHKMrWFnnUDKLPelBu_8Q.png',

        },
        {
            id: 3,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRrMp7EDrB-WGtUqXuFkO-n8C5-0-FJ2c6fMRVhCBdLx3uBcSdPdMtDiQTIOfyZN_AyLu4TIcx7CQRqrcBC4c7gv3QPgy0s7OQ.png',

        },
        {
            id: 4,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTXCZ23WsNEfx8Ejws4QnFaCqp6z25CIqgSj_VpJartMiJVUCbVYFuIPHQEf3YXEIv2nfhoLgnxSO8ZfypewVPTlEZv0VKO9PQ.png',

        },
        {
            id: 5,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaHEC9COHdhkvZykfXTgaKHhHQB4QRBxhFq6gESzkuFkj_BDD66p3S6HmixAZcdUHH701KWdhSZkjoTX2LilozKq48Ha69Wl2A.png',

        },
        {
            id: 6,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdae964dclPwTTegelmrB-z9zCF8OPW3IqL_hB4XjpcJoe4nAh3xyM7z27s9OmtugwTsi0m2oqOWavIYJ56-4LQhM-NVKv9xow.png',

        },
        {
            id: 7,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVYgkqyPjGbrdFabAaScAkffugf9Iv6Wt2GaL94XCesz1oGp6vgM0SoAnDD7tJASSvSy0IKpmeo7QzVrInepDafQEMXMpgA2Ng.png',

        },
        {
            id: 8,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZ757RLEgtR5scrShGcYIXMVJ4u-Nq9MMR5DBTdY0h_2xbLluQhfqAnN_X-nNW30Db0v_jKUwBzUNLR_0Lq2XkXAPJMnvTY0UQ.png',

        },
        {
            id: 9,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdFu41cMXRWNK1EkDj_yH1bxeh9a0udswBpkyBNBYFsgcCEANkojvc63RsB56mXTPWhSqhDnWfJQOH9V7BymHd5Jj8XGwUJ-eQ.png',

        },
        {
            id: 10,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZEwZmUZB6H1tKp8gauZK6AhrM6mWfatr-y4LSGl1nWaD0hYc2NMRp6vknlM5jqt_Zds3X7aRfv69hxR_B0ipuG9kGY5ENFo3w.png',

        },
        {
            id: 11,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTknCQJjJQ0Dt1EqIktQSx1L_BuuMA_5mE6Ch-e39lEpO2K5PwNj9Ql96OSNHtWHwNIpN0qeRvGdzdO8FolxaQxnWNlBdvdC8g.png',

        },
        {
            id: 12,
            userImage: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTxO1HAzIh18LDAY7Igs6qQ3GhmsclmpCllWnoojeSDD0lMm9hUCp-C4VGo3cT40xfg_7SpIoY6pmRIl-W7B5CN8kvXCBqM7n8_f.png',

        },
    ]

    const[user, setUser] = useState({
        name: "",

    })

    let name, value;

    const handleInputs =(e) => {
        console.log(e)
        
    }
    return (
        <div className='user-profile-container'>
            <div className='user-profile-bar'>
                <div className="user-edit">Edit Profile</div>
                <div className='user-edit-bottom-line'></div>
                <div className="user-input-section">
                    <div className="user-profile-cover">
                        <img src={userProfileImages[0].userImage} alt="Profile image" />
                        <div className="edit-user-image cur-pot"><i class="fa-solid fa-pencil"></i></div>
                    </div>
                    <div className='user-input-flex'>
                    <div className="user-input">
                        <input type="text" name="" id="" placeholder='NAME'/>
                    </div>
                    <div className="user-language">
                        <div>
                        <div className="select-language-title">Language:</div>
                        <select name="" id="">
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                        </div>
                        <div className='bottom-line'></div>
                        <div className="maturity-settings">
                            <div className="maturity-title">Maturity Settings:</div>
                            <div className="maturity-display">U/A 16+</div>
                            <div className="maturity-caption">Only show titles rated <span>U/A 16+</span> below for this profile.</div>
                            <div className="maturity-edit-button"><button>Edit</button></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='bottom-line'></div>
                <div className="save-delete-section">
                    <div className="save-btn btns"><button>Save</button></div>
                    <div className="cancle-btn btns"><button>Cancle</button></div>
                    <div className="delete-btn btns"><button>Delete Profile</button></div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;