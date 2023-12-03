import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsCreateManySkillInputSchema } from './PersonsToSkillsCreateManySkillInputSchema';

export const PersonsToSkillsCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.PersonsToSkillsCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToSkillsCreateManySkillInputSchema),z.lazy(() => PersonsToSkillsCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToSkillsCreateManySkillInputEnvelopeSchema;
