import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar() {
    return (
        <header>
            <div className="container">
                <Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M263.788-96Q234-96 213-117.212q-21-21.213-21-51Q192-198 213.212-219q21.213-21 51-21Q294-240 315-218.788q21 21.213 21 51Q336-138 314.788-117q-21.213 21-51 21Zm432 0Q666-96 645-117.212q-21-21.213-21-51Q624-198 645.212-219q21.213-21 51-21Q726-240 747-218.788q21 21.213 21 51Q768-138 746.788-117q-21.213 21-51 21ZM253-696l83 192h301l82-192H253Zm-31-72h570q14 0 20.5 11t1.5 23L702.627-476.145Q694-456 676.5-444 659-432 637-432H317l-42 72h493v72H276q-43 0-63.5-36.153Q192-360.305 213-396l52-90-131-306H48v-72h133l41 96Zm114 264h301-301Z"/>
                        <text x="10" y="30" font-family="Arial" font-size="250" fill="black">Shopify</text>
                    </svg>
                </Link>
                <Link>
               
                </Link>
                <nav>
                    <ul>
                        <li><Link>Apparels</Link></li>
                        <li><Link>Appliances</Link></li>
                        <li><Link>Furniture</Link></li>
                        <li><Link>Gadgets</Link></li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Navbar;