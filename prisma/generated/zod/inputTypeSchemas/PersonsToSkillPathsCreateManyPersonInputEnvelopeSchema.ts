import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsCreateManyPersonInputSchema } from './PersonsToSkillPathsCreateManyPersonInputSchema';

export const PersonsToSkillPathsCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToSkillPathsCreateManyPersonInputSchema),z.lazy(() => PersonsToSkillPathsCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToSkillPathsCreateManyPersonInputEnvelopeSchema;
