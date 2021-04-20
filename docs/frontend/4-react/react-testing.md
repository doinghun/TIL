---
slug: "react-testing"
title: Testing in React
---

### Testing with Jest & Enzyme in React

Jest Syntax

- **it** ( 'description of the test' , function containing our test logic)

        it('shows a comment box', () => {
        	const div = document.create('div');
        	ReactDOM.render(<App />, div);
        	ReactDOM.unmountComponentAtNode(div);
        });

- **expect** ( value that we are inspecting ). matcher statement (value that we expect to see)

        expect(div.innerHTML).toContain('Comment Box')

![Testing](/img/react-testing.png)

Enzyme

![Testing 1](/img/react-testing-1.png)

- Shallow (shallow)
- Full DOM (mount)
