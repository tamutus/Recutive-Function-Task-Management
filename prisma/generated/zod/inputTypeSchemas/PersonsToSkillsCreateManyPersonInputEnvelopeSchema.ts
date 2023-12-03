import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsCreateManyPersonInputSchema } from './PersonsToSkillsCreateManyPersonInputSchema';

export const PersonsToSkillsCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.PersonsToSkillsCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToSkillsCreateManyPersonInputSchema),z.lazy(() => PersonsToSkillsCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToSkillsCreateManyPersonInputEnvelopeSchema;
