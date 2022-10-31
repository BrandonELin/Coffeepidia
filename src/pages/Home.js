import { useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function Home() {

    return (
        <div className="brown" style={{height:'100vh'}}>
            <Card border="dark" className="bg-dark text-white">
                <Card.Body>
                    <Card.Title>
                        <h1>Welcome to the CoffeEncyclopedia</h1>
                    </Card.Title>
                    <Card.Text>
                        If you've ever been to a coffee shop and didn't know what to buy, this is the place for you <br/>
                        From Hot Cappucinos to Iced Lattes, Coffee has never been easier to understand. <br/>
                        Find a new favorite or make of list of drinks to remember, it's up to you.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
