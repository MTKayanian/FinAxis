import React, { Component, useState } from 'react';
import Link from 'next/link';

class BrowserVerificationGA1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <section>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="confirm-email-form">
                  <div class="signin-head">
                    <div class="dapp-header-logo">
                      <img
                        src="/images/logo-big.png"
                        alt="logo"
                        class="img-fluid"
                      />
                    </div>
                    <h2>Activate 2-Step verification - Authenticator app</h2>
                    <div class="dapp-recovery-phn">
                      <span>
                        <img
                          src="/images/auth-check2.png"
                          alt="logo"
                          class="img-fluid"
                        />
                      </span>
                      2-Step verification with an Authenticator app activated
                    </div>
                  </div>
                  <div class="dapp-browser-md">
                    <h3>Two factor backup codes </h3>
                    <p>
                      Treat this with the same level of attention to your
                      password. Backup codes are used to log in to your account
                      if you lose access to your device and can’t receive
                      authentication codes.
                    </p>
                  </div>
                  <div class="dapp-accessible-place">
                    <div class="dapp-accessible-place-top">
                      <div>
                        <img
                          src="/images/alert-triangle.png"
                          alt="logo"
                          class="img-fluid"
                        />
                      </div>
                      <p>
                        Please keep these in a{' '}
                        <span>safe ans accessible place</span>. If you lose
                        access to your two-factor device and don’t have backup
                        codes, you will lose access to your account.
                      </p>
                    </div>
                    <div class="dapp-backup-code">
                      <h3>Two-factor backup code</h3>
                      <ul>
                        <li>
                          <span>FGBSPH</span>
                          <span>DUYPAF</span>
                        </li>
                        <li>
                          <span>YSUCWP</span>
                          <span>WGXAYX</span>
                        </li>
                        <li>
                          <span>FSXMAF</span>
                          <span>KNSPFD</span>
                        </li>
                      </ul>
                    </div>
                    <div class="dapp-accessible-bottom">
                      <ul>
                        <li class="ml-0">
                          <a href="#">
                            <img
                              src="/images/print.png"
                              alt="print"
                              class="img-fluid mr-2"
                            />
                            Print
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="/images/download.png"
                              alt="download"
                              class="img-fluid mr-2"
                            />
                            Download
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="/images/save.png"
                              alt="save"
                              class="img-fluid mr-2"
                            />
                            Save
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-flex dApp-request-btn">
                    <a href="#" class="btn bttn-primary">
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default BrowserVerificationGA1;
