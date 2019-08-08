import React from "react";
import Image from "./components/Image";


var my_images = [
    { id: 0, alt: "robot", src: "https://images.unsplash.com/photo-1508175800969-525c72a047dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2367&q=80" },
    { id: 1, alt: "stormtrooper", src: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80" },
    { id: 2, alt: "fireworks", src: "https://images.unsplash.com/photo-1498673394965-85cb14905c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" },
    { id: 3, alt: "disney_cartoons", src: "https://images.unsplash.com/photo-1528066588405-9e20509b9e34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" },
    { id: 4, alt: "rapunzel", src: "https://images.unsplash.com/photo-1558679928-be7e02981a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" },
    { id: 5, alt: "lateMickey", src: "https://images.unsplash.com/photo-1547782149-1bf9689e7654?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" },
    { id: 6, alt: "bird", src: "https://images.unsplash.com/photo-1560445958-4bd92e092605?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" },
    { id: 7, alt: "happyKid", src: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" },
    // { id: 8, alt: "smiley", src: "https://images.unsplash.com/photo-1531715047058-33b6c9df7897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" }
]

class App extends React.Component {
    state = {
        score: 0,
        images: my_images,
        images_clicked: [],
        message: "Click any image",
        highScore: 0
    }

    

    // function clickme(id) {}

    clickme = (id) => {

        // console.log(id)

        // let current_images = this.state.images_clicked;


        if (this.state.images_clicked.indexOf(id) === -1) {
            //image doesn't exist
            this.setState({
                score: this.state.score + 1,
                images_clicked: [...this.state.images_clicked, id],
                images: this.state.images.sort(() => Math.random() - 0.5),
                message: this.state.message.replace("Click any image","You did it!"),
              
                

            });
        } else {
            this.setState({
                score: 0,
                images_clicked: [],
                images: this.state.images.sort(() => Math.random() - 0.5),
                message: this.state.message.replace("Click any image","Try again.")
            })
        }


    };

    render() {
        return (
            <div className="container">

                <div className="row One">

                    <div className="col-md-4" message>
                        <div className="clientmessage">{this.state.message}</div>

                    </div>


                    <div className="col-md-4">
                       
                    </div>

                    
                    <div className="col-md-4">
                        <div class="score">Score: {this.state.score}</div>
                    </div>


                </div>

                <div className="row Two">

                    <div className="col-md-12 images">

                        {this.state.images.map((img) => (
                            <Image id={img.id} alt={img.alt} src={img.src} clickme={this.clickme} />

                            // <Image id={img.id} alt={img.slug} src={img.images.fixed_height_still.url} key={img.id} clickme={this.clickme} />

                        ))}

                    </div>



                </div>







            </div>
        )
    }

}

export default App;