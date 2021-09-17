const { createFilePath } = require("gatsby-source-filesystem")
const path = require(`path`)


const onCreateNode = ({node,actions,getNode}) => {
    const {createNodeField} = actions
    if(node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode})
        createNodeField({
            name:`slug`,
            node,
            value
        })
    }
    if(node.internal.type === `ProductsCsv`) {
        const value = node.name
        const processedSlug = value.replace(/\s+/g, '-').toLowerCase();
        createNodeField({
            name:`slug`,
            node,
            value: processedSlug
        })
    }
}

const createPages = async ({actions,graphql}) => {
    const {createPage} = actions
    const result = await graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                    productColors
                    age
                    }
                }
            }
        }
        allProductsCsv {
            edges {
                node {
                    id
                    sku
                    fields{
                        slug
                    }
                    templateKey
                    productCategory
                }
            }
        }
    }
    `)
    if(result.errors){
        console.error(result.errors)
    }
    result.data.allProductsCsv.edges.forEach(({ node }) => {
        //console.log(node.productCategory)
        createPage({
            path: `${String(node.productCategory)}/${node.fields.slug}`,
            component: path.resolve(
                `src/templates/${String(node.templateKey)}.js`
            ),
            context: {
                id: node.id
            }
        })
    })
}

module.exports = {
    /*
    1. function for how to create page
    2. On create node
    */

    onCreateNode,
    createPages
};