import { z } from 'zod';

/////////////////////////////////////////
// ENERGIES TO PROJECT TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * The community can denote that certain project templates are relevant to certain forms of energy
 */
export const EnergiesToProjectTemplatesSchema = z.object({
  projectId: z.number().int(),
  energyId: z.number().int(),
  links: z.string().array(),
  info: z.string().nullable(),
})

export type EnergiesToProjectTemplates = z.infer<typeof EnergiesToProjectTemplatesSchema>

export default EnergiesToProjectTemplatesSchema;
