export default [
    {
        name: 'melt',
        from: 'solid',
        to: 'liquid',
        condition: temperature => temperature > 0
    },
    {
        name: 'evaporate',
        from: 'liquid',
        to: 'gas',
        condition: temperature => temperature > 0
    },
    {
        name: 'deliquesce',
        from: 'gas',
        to: 'liquid',
        condition: () => true
    },
    {
        name: 'freeze',
        from: 'liquid',
        to: 'solid',
        condition: temperature => temperature < 0
    },
    {
        name: 'sublime',
        from: 'solid',
        to: 'gas',
        condition: () => true
    },
    {
        name: 'condense',
        from: 'gas',
        to: 'solid',
        condition: ''
    }
];
