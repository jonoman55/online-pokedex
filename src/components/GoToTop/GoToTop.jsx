import React, { Component } from "react";
import '../../styles/pokeStyles.css';

export default class GoToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div className="back-to-top show-back-to-top">
                {is_visible && (
                    <button aria-label="To top" className="top" onClick={() => this.scrollToTop()}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 451.847 451.846">
                                <path fill="white" d="M248.292 106.406l194.281 194.29c12.365 12.359 12.365 32.391 0 44.744-12.354 12.354-32.391 12.354-44.744 0L225.923 173.529 54.018 345.44c-12.36 12.354-32.395 12.354-44.748 0-12.359-12.354-12.359-32.391 0-44.75L203.554 106.4c6.18-6.174 14.271-9.259 22.369-9.259 8.095 0 16.192 3.091 22.369 9.265z"></path>
                            </svg>
                        </span>
                    </button>
                )}
            </div>
        );
    }
}