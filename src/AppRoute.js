import { MainHome, MenuTable, MessMenu, Form, review2, UserTable, Static, NewMenu, NewBlog, NewAnnouncement, PerBlog, PerdayFood, UpdateMenu, UpdateAnnouncement, Updateblog, RatingPerFood, FormTable, Blog, Logout, Announcement, BlogPer, Footer,PerAnnouncement } from "./AppImport";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import ReactLoading from "react-loading";
import React from "react";
import { Article, Section } from "./Components/style/genetic";


export default function AppRoute() {
    return (
        <>
            <React.Suspense fallback={
                <Section>
                    <Article key="balls">
                        <ReactLoading type="balls" color="#357edd" />
                    </Article>
                </Section>
            }>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainHome} />
                        <Route exact path="/mess" component={MessMenu} />
                        <Route exact path="/review" component={Form} />
                        <Route exact path="/review2" component={review2} />
                        <Route exact path="/usertable" component={UserTable} />
                        <Route exact path="/static" component={Static} />
                        <Route exact path="/menutable" component={MenuTable} />
                        <Route exact path="/menutable/newmenu" component={NewMenu} />
                        <Route exact path="/menutable/:id" component={PerdayFood} />
                        <Route exact path="/mess/:id" component={PerdayFood} />
                        <Route exact path="/menutable/update/:id" component={UpdateMenu} />
                        <Route exact path="/menutable/checkrating/:fooditem" component={RatingPerFood} />
                        <Route exact path="/formtable" component={FormTable} />
                        <Route exact path="/blogs" component={Blog} />
                        <Route exact path="/blogs/:id" component={PerBlog} />
                        <Route exact path="/newblogs" component={NewBlog} />
                        <Route exact path="/myblogs" component={BlogPer} />
                        <Route exact path="/updateblog/:id" component={Updateblog} />
                        <Route exact path="/newAnnouncement" component={NewAnnouncement} />
                        <Route exact path="/Announcement" component={Announcement} />
                        <Route exact path="/annnoucements/:id" component={PerAnnouncement} />
                        <Route exact path="/UpdateAnnouncement/:id" component={UpdateAnnouncement} />
                        <Route exact path="/logout" component={Logout} />
                        <Route component={Error} />
                    </Switch>

                </BrowserRouter>
                <ScrollUpButton
                />
                <Footer />
            </React.Suspense>
        </>
    )
}