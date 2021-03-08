var mask = {
    /**
     * Init
     *
     * @param o
     * @param f
     */
    init: function(o, f) {
        v_obj = o;
        v_fun = f;

        setTimeout("mask.execmasc()", 1);
    },

    /**
     * ExecMasc
     */
    execmasc: function() {
        v_obj.value = v_fun(v_obj.value)
    },

    /**
     * Tel
     *
     * @param v
     */
    tel: function(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");

        return v;
    },

    /**
     * CPF
     *
     * @param v
     */
    cpf: function(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        return v;
    },



}