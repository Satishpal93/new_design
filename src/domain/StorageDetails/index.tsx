import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { images } from '../../img';
import { WebServiceWizard } from './WebServiceWizard';
import { Entity } from './Entity';
import { Performance } from './Performance';

export class StorageDetails extends React.Component<any, any> {
    breadCrumbs: any;
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            currentStep: 0,
            currentNodeStep: 0,
            nodeSteps: [
                {
                    name: "VPC1 - EC2 - Node 2"
                },
                {
                    name: "VPC1 - EC2 - Node 5"
                },
                {
                    name: "VPC1 - EC2 - Node 4"
                },
            ]
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Assets | Environments",
                isCurrentPage: true
            }
        ];
        this.steps = [
            {
                name: "Entity",
                component: <Entity />
            },
            {
                name: "Performance",
                component: <Performance />
            },
            {
                name: "Availability",
                component: <div>Availability</div>
            },
            {
                name: "Reliability",
                component: <div>Reliability</div>
            },
            {
                name: "End Usage",
                component: <div>End Usage</div>
            },
            {
                name: "Security",
                component: <div>Security</div>
            },
            {
                name: "Compliance",
                component: <div>Compliance</div>
            },
            {
                name: "Alerts",
                component: <div>Alerts</div>
            }
        ];
    }

    onClickNodeStepButton = (activeNodeStep: any) => {
        this.setState({
            currentNodeStep: activeNodeStep
        });
    };

    createNodeStepLine = () => {
        const { nodeSteps, currentNodeStep } = this.state;
        const retData = [];
        for (let i = 0; i < nodeSteps.length; i++) {
            const nodeStep = nodeSteps[i];
            retData.push(
                <li className={`${currentNodeStep === i ? 'active' : ''}`} onClick={e => this.onClickNodeStepButton(i)}>
                    <a href="#">{nodeStep.name} <i className="fa fa-times" aria-hidden="true"></i></a>
                </li>);
        }
        return retData;
    };

    render() {
        const { currentNodeStep } = this.state;
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
                <div className="service-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="asset-heading">
                                    Environments
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="float-right common-right-btn">
                                    <Link to={`${config.basePath}/`} className="asset-white-button min-width-inherit m-r-0">
                                        <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container">
                        <div className="service-account-container">
                            <div className="account-tabs">
                                <ul>
                                    {this.createNodeStepLine()}
                                </ul>
                            </div>

                            <div className="webservice-container">
                                <div className={`inner ${currentNodeStep ? 'd-none' : 'd-block'}`}>
                                    <div className="heading">
                                        <h3>
                                            <span><img src={images.awsLogo} alt="" /></span>
                                            Amazon Web Services
                                        </h3>
                                        <div className="breadcrumbs">
                                            <ul>
                                                <li>Account Number - <span>AWS-(657907747545)</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="account-box">
                                        <div className="row d-flex justify-content-center align-items-center">
                                            <div className="col-lg-7 col-md-7 col-sm-12">
                                                <div className="breadcrumbs">
                                                    <ul>
                                                        <li>Account Number - <span>AWS-(657907747545)</span></li>
                                                        <li><i className="fa fa-angle-right" aria-hidden="true"></i>VPC 1</li>
                                                        <li><i className="fa fa-angle-right" aria-hidden="true"></i>EC2</li>
                                                        <li><i className="fa fa-angle-right" aria-hidden="true"></i>Node 2</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 col-sm-12">
                                                <div className="search-box form-group">
                                                    <input type="text" className="control-form" placeholder="Search" value="" />
                                                    <button><i className="fa fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="displayed-here">
                                        <p>Node details will be displayed here</p>
                                    </div>
                                    <WebServiceWizard steps={this.steps} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};