/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import BootstrapCard from "../../../components/common/bootstrap-card/bootstrapCard";
import BarGraph from "../../../components/common/bar-graph/barGraph";

class BarSkillsCard extends Component {
    renderAside() {
        const { isGifChanged } = this.props;
        let source;

        if (!isGifChanged) {
            source = require(`../../../assets/images/about/player.gif`);
        } else {
            source = require(`../../../assets/images/about/won.gif`);
        }

        return (
            <div className="player-container">
                <img
                    src={source}
                    className={!isGifChanged ? "card-img d-none d-lg-block" : "card-img d-none d-lg-block won"}
                />
            </div>
        );
    }

    renderSection() {
        const { options, waitForit } = this.props;
        return (
            <div className="card-body">
                {waitForit ? <BarGraph options={options} /> : null}
            </div>
        );
    }

    render() {
        return (
            <BootstrapCard
                asideContent={this.renderAside()}
                sectionContent={this.renderSection()}
            />
        );
    }
}

export default BarSkillsCard;
