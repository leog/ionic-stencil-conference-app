/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/state-tunnel';
import '@ionic/core';
import 'ionicons';

import {
  UserState,
} from './providers/user-state';
import {
  LocationsState,
} from './providers/locations-state';
import {
  Session,
  SessionsState,
} from './providers/sessions-state';
import {
  SpeakersState,
} from './providers/speakers-state';

declare global {

  namespace StencilComponents {
    interface AppRoot {

    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageAboutPopover {

    }
  }

  interface HTMLPageAboutPopoverElement extends StencilComponents.PageAboutPopover, HTMLStencilElement {}

  var HTMLPageAboutPopoverElement: {
    prototype: HTMLPageAboutPopoverElement;
    new (): HTMLPageAboutPopoverElement;
  };
  interface HTMLElementTagNameMap {
    'page-about-popover': HTMLPageAboutPopoverElement;
  }
  interface ElementTagNameMap {
    'page-about-popover': HTMLPageAboutPopoverElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-about-popover': JSXElements.PageAboutPopoverAttributes;
    }
  }
  namespace JSXElements {
    export interface PageAboutPopoverAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageAbout {

    }
  }

  interface HTMLPageAboutElement extends StencilComponents.PageAbout, HTMLStencilElement {}

  var HTMLPageAboutElement: {
    prototype: HTMLPageAboutElement;
    new (): HTMLPageAboutElement;
  };
  interface HTMLElementTagNameMap {
    'page-about': HTMLPageAboutElement;
  }
  interface ElementTagNameMap {
    'page-about': HTMLPageAboutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-about': JSXElements.PageAboutAttributes;
    }
  }
  namespace JSXElements {
    export interface PageAboutAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageAccount {
      'logOutUser': () => void;
      'setUsername': (username: string) => void;
      'user': UserState;
    }
  }

  interface HTMLPageAccountElement extends StencilComponents.PageAccount, HTMLStencilElement {}

  var HTMLPageAccountElement: {
    prototype: HTMLPageAccountElement;
    new (): HTMLPageAccountElement;
  };
  interface HTMLElementTagNameMap {
    'page-account': HTMLPageAccountElement;
  }
  interface ElementTagNameMap {
    'page-account': HTMLPageAccountElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-account': JSXElements.PageAccountAttributes;
    }
  }
  namespace JSXElements {
    export interface PageAccountAttributes extends HTMLAttributes {
      'logOutUser'?: () => void;
      'setUsername'?: (username: string) => void;
      'user'?: UserState;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageLogin {
      'logInUser': (username: string) => void;
    }
  }

  interface HTMLPageLoginElement extends StencilComponents.PageLogin, HTMLStencilElement {}

  var HTMLPageLoginElement: {
    prototype: HTMLPageLoginElement;
    new (): HTMLPageLoginElement;
  };
  interface HTMLElementTagNameMap {
    'page-login': HTMLPageLoginElement;
  }
  interface ElementTagNameMap {
    'page-login': HTMLPageLoginElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-login': JSXElements.PageLoginAttributes;
    }
  }
  namespace JSXElements {
    export interface PageLoginAttributes extends HTMLAttributes {
      'logInUser'?: (username: string) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageMap {
      'locations': LocationsState;
    }
  }

  interface HTMLPageMapElement extends StencilComponents.PageMap, HTMLStencilElement {}

  var HTMLPageMapElement: {
    prototype: HTMLPageMapElement;
    new (): HTMLPageMapElement;
  };
  interface HTMLElementTagNameMap {
    'page-map': HTMLPageMapElement;
  }
  interface ElementTagNameMap {
    'page-map': HTMLPageMapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-map': JSXElements.PageMapAttributes;
    }
  }
  namespace JSXElements {
    export interface PageMapAttributes extends HTMLAttributes {
      'locations'?: LocationsState;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageScheduleFilter {
      'refreshSessionsTrackFilters': (trackNames: string[]) => void;
      'sessions': SessionsState;
    }
  }

  interface HTMLPageScheduleFilterElement extends StencilComponents.PageScheduleFilter, HTMLStencilElement {}

  var HTMLPageScheduleFilterElement: {
    prototype: HTMLPageScheduleFilterElement;
    new (): HTMLPageScheduleFilterElement;
  };
  interface HTMLElementTagNameMap {
    'page-schedule-filter': HTMLPageScheduleFilterElement;
  }
  interface ElementTagNameMap {
    'page-schedule-filter': HTMLPageScheduleFilterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-schedule-filter': JSXElements.PageScheduleFilterAttributes;
    }
  }
  namespace JSXElements {
    export interface PageScheduleFilterAttributes extends HTMLAttributes {
      'refreshSessionsTrackFilters'?: (trackNames: string[]) => void;
      'sessions'?: SessionsState;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageSchedule {
      'fetchSessions': () => Promise<void>;
      'searchSessions': (searchText: string) => void;
      'sessions': SessionsState;
    }
  }

  interface HTMLPageScheduleElement extends StencilComponents.PageSchedule, HTMLStencilElement {}

  var HTMLPageScheduleElement: {
    prototype: HTMLPageScheduleElement;
    new (): HTMLPageScheduleElement;
  };
  interface HTMLElementTagNameMap {
    'page-schedule': HTMLPageScheduleElement;
  }
  interface ElementTagNameMap {
    'page-schedule': HTMLPageScheduleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-schedule': JSXElements.PageScheduleAttributes;
    }
  }
  namespace JSXElements {
    export interface PageScheduleAttributes extends HTMLAttributes {
      'fetchSessions'?: () => Promise<void>;
      'searchSessions'?: (searchText: string) => void;
      'sessions'?: SessionsState;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageSession {
      'addFavoriteSession': (sessionId: number) => void;
      'goback': string;
      'removeFavoriteSession': (sessionId: number) => void;
      'sessionId': number;
      'sessions': SessionsState;
    }
  }

  interface HTMLPageSessionElement extends StencilComponents.PageSession, HTMLStencilElement {}

  var HTMLPageSessionElement: {
    prototype: HTMLPageSessionElement;
    new (): HTMLPageSessionElement;
  };
  interface HTMLElementTagNameMap {
    'page-session': HTMLPageSessionElement;
  }
  interface ElementTagNameMap {
    'page-session': HTMLPageSessionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-session': JSXElements.PageSessionAttributes;
    }
  }
  namespace JSXElements {
    export interface PageSessionAttributes extends HTMLAttributes {
      'addFavoriteSession'?: (sessionId: number) => void;
      'goback'?: string;
      'removeFavoriteSession'?: (sessionId: number) => void;
      'sessionId'?: number;
      'sessions'?: SessionsState;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageSignup {
      'signUpUser': (userName: string) => void;
    }
  }

  interface HTMLPageSignupElement extends StencilComponents.PageSignup, HTMLStencilElement {}

  var HTMLPageSignupElement: {
    prototype: HTMLPageSignupElement;
    new (): HTMLPageSignupElement;
  };
  interface HTMLElementTagNameMap {
    'page-signup': HTMLPageSignupElement;
  }
  interface ElementTagNameMap {
    'page-signup': HTMLPageSignupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-signup': JSXElements.PageSignupAttributes;
    }
  }
  namespace JSXElements {
    export interface PageSignupAttributes extends HTMLAttributes {
      'signUpUser'?: (userName: string) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageSpeakerDetail {
      'fetchSpeakers': () => Promise<void>;
      'speakerId': number;
      'speakers': SpeakersState;
    }
  }

  interface HTMLPageSpeakerDetailElement extends StencilComponents.PageSpeakerDetail, HTMLStencilElement {}

  var HTMLPageSpeakerDetailElement: {
    prototype: HTMLPageSpeakerDetailElement;
    new (): HTMLPageSpeakerDetailElement;
  };
  interface HTMLElementTagNameMap {
    'page-speaker-detail': HTMLPageSpeakerDetailElement;
  }
  interface ElementTagNameMap {
    'page-speaker-detail': HTMLPageSpeakerDetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-speaker-detail': JSXElements.PageSpeakerDetailAttributes;
    }
  }
  namespace JSXElements {
    export interface PageSpeakerDetailAttributes extends HTMLAttributes {
      'fetchSpeakers'?: () => Promise<void>;
      'speakerId'?: number;
      'speakers'?: SpeakersState;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageSpeakerList {
      'fetchSessions': () => Promise<void>;
      'fetchSpeakers': () => Promise<void>;
      'sessions': SessionsState;
      'speakers': SpeakersState;
    }
  }

  interface HTMLPageSpeakerListElement extends StencilComponents.PageSpeakerList, HTMLStencilElement {}

  var HTMLPageSpeakerListElement: {
    prototype: HTMLPageSpeakerListElement;
    new (): HTMLPageSpeakerListElement;
  };
  interface HTMLElementTagNameMap {
    'page-speaker-list': HTMLPageSpeakerListElement;
  }
  interface ElementTagNameMap {
    'page-speaker-list': HTMLPageSpeakerListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-speaker-list': JSXElements.PageSpeakerListAttributes;
    }
  }
  namespace JSXElements {
    export interface PageSpeakerListAttributes extends HTMLAttributes {
      'fetchSessions'?: () => Promise<void>;
      'fetchSpeakers'?: () => Promise<void>;
      'sessions'?: SessionsState;
      'speakers'?: SpeakersState;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageSupport {

    }
  }

  interface HTMLPageSupportElement extends StencilComponents.PageSupport, HTMLStencilElement {}

  var HTMLPageSupportElement: {
    prototype: HTMLPageSupportElement;
    new (): HTMLPageSupportElement;
  };
  interface HTMLElementTagNameMap {
    'page-support': HTMLPageSupportElement;
  }
  interface ElementTagNameMap {
    'page-support': HTMLPageSupportElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-support': JSXElements.PageSupportAttributes;
    }
  }
  namespace JSXElements {
    export interface PageSupportAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageTabs {

    }
  }

  interface HTMLPageTabsElement extends StencilComponents.PageTabs, HTMLStencilElement {}

  var HTMLPageTabsElement: {
    prototype: HTMLPageTabsElement;
    new (): HTMLPageTabsElement;
  };
  interface HTMLElementTagNameMap {
    'page-tabs': HTMLPageTabsElement;
  }
  interface ElementTagNameMap {
    'page-tabs': HTMLPageTabsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-tabs': JSXElements.PageTabsAttributes;
    }
  }
  namespace JSXElements {
    export interface PageTabsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageTutorial {
      'toggleTutorial': () => void;
    }
  }

  interface HTMLPageTutorialElement extends StencilComponents.PageTutorial, HTMLStencilElement {}

  var HTMLPageTutorialElement: {
    prototype: HTMLPageTutorialElement;
    new (): HTMLPageTutorialElement;
  };
  interface HTMLElementTagNameMap {
    'page-tutorial': HTMLPageTutorialElement;
  }
  interface ElementTagNameMap {
    'page-tutorial': HTMLPageTutorialElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-tutorial': JSXElements.PageTutorialAttributes;
    }
  }
  namespace JSXElements {
    export interface PageTutorialAttributes extends HTMLAttributes {
      'toggleTutorial'?: () => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SessionSchedule {
      'addFavoriteSession': (sessionId: number) => void;
      'favoriteSessions': number[];
      'removeFavoriteSession': (sessionId: number) => void;
      'sessionList': Session[];
    }
  }

  interface HTMLSessionScheduleElement extends StencilComponents.SessionSchedule, HTMLStencilElement {}

  var HTMLSessionScheduleElement: {
    prototype: HTMLSessionScheduleElement;
    new (): HTMLSessionScheduleElement;
  };
  interface HTMLElementTagNameMap {
    'session-schedule': HTMLSessionScheduleElement;
  }
  interface ElementTagNameMap {
    'session-schedule': HTMLSessionScheduleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'session-schedule': JSXElements.SessionScheduleAttributes;
    }
  }
  namespace JSXElements {
    export interface SessionScheduleAttributes extends HTMLAttributes {
      'addFavoriteSession'?: (sessionId: number) => void;
      'favoriteSessions'?: number[];
      'removeFavoriteSession'?: (sessionId: number) => void;
      'sessionList'?: Session[];
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
