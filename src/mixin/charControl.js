import { mapGetters, mapMutations } from "vuex";

export default {
    computed:{
        ...mapGetters({
            charName:'character/getName',
            charFacepic: 'character/getFacePicture',
            charBanner: 'character/getBanner',
            charDescription: 'character/getDescription',
            charHp: 'character/getHp',
            charSp: 'character/getSp',
            charReleaseStatus: 'character/getReleaseStatus',
            charSkills: 'character/getSkills',
            charSkillEffect: 'character/getSkillEffect',
            charSkillId: 'character/getSkillId',
            charId: 'character/getId' 
        })
    },
    methods:{
        ...mapMutations({
            addCharSkill: 'character/ADD_SKILL',
            setChar: 'character/SET_CHARACTER',
            setCharFacepic: 'character/SET_FACE_PICTURE',
            setCharBanner: 'character/SET_CHAR_BANNER',
            setSkillBanner: 'character/SET_SKILL_BANNER',
            addSkillEffect: 'character/ADD_SKILL_EFFECT',
        })
    }
}