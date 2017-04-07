import { 
    LOAD_SPEAKERS,
    LOAD_SPEAKER,
    UNLOAD_SPEAKER
} from './actions';

let favorites = localStorage.getItem('favoriteSpeakers');
favorites = favorites ? JSON.parse(favorites) : []

const initialState = {
    favorites,
    store: Ext.create('Ext.data.Store', {
        proxy: {
            type: 'ajax',
            url: '/resources/speakers.json'
        },
        listeners: {
            load: store => store.each(record => record.set('favorite', favorites.indexOf(record.get('name')) !== -1))
        }
    })
};

export default function speakersReducer(state = initialState, action) {
    
    switch (action.type) {
        case LOAD_SPEAKERS: {
            state.store.load()
            return { ...state };
        }
        case LOAD_SPEAKER: {
            return { ...state, speaker: action.speaker, showSpeaker: true }
        }
        case UNLOAD_SPEAKER: {
            return { ...state, showSpeaker: false }
        }
        default:
            return { ...state };
    }
    
}