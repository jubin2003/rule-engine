const evaluateRule = (rule, data) => {
    try {
        // Replace AND/OR with &&/|| for JavaScript evaluation
        const formattedRule = rule
            .replace(/AND/g, '&&')
            .replace(/OR/g, '||');
        
        // Use the eval function to evaluate the rule with the provided data
        const result = eval(formattedRule);
        
        return result;
    } catch (error) {
        console.error('Error evaluating rule:', error);
        throw new Error('Invalid rule or data format');
    }
};
