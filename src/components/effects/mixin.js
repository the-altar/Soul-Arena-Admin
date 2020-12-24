export default {
    data() {
        return {
            char: false,
            entity: null,
            id: null,
            skills:null,
            skillIdList:null,   
        }
    },
    methods: {
        async eventHandler() {
            try {
                const p = this.entity.priority || 0
                delete this.entity.priority
                await this.$axios.post("/effect/update", [this.char, this.id, this.entity, p]);
            } catch (err) {
                alert(err);
            }
        },
    },
    computed: {
        effect() {
            return this.char;
        },
        reiatsuTypes() {
            return this.$store.getters["enums/getEnum"]("reiatsuTypings");
        },
        activationTypes() {
            return this.$store.getters["enums/getEnum"]("activationTypings");
        },
        behaviorTypes() {
            return this.$store.getters["enums/getEnum"]("effectTargetBehaviorTypings");
        },
        skillTypes() {
            return this.$store.getters['enums/getEnum']("skillClassTypings")
        },
        pokemonTypes() {
            return this.$store.getters["enums/getEnum"]("pokemonTypings");
        },
        damageTypes() {
            return this.$store.getters["enums/getEnum"]("damageTypings");
        },
        costTypes() {
            return this.$store.getters["enums/getEnum"]("costTypings");
        },
        targetModeTypes() {
            return this.$store.getters["enums/getEnum"]("targetModeTypings");
        },
        triggerTypes() {
            return this.$store.getters["enums/getEnum"]("triggerClauseTypings");
        },
        effectTypes() {
            return this.$store.getters["enums/getEnum"]("effectTypings");
        },
    },

    async created() {
        try {
            const id = this.$route.params.id;
            const char = await this.$axios.get(`/effect/${id}`);
            this.char = char.data.data;
            this.id = char.data.id;
            this.entity = char.data.skill_id;

        } catch (err) {
            alert(err);
        }
    },
}