import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsCreateManySkillPathInputSchema } from './PersonsToSkillPathsCreateManySkillPathInputSchema';

export const PersonsToSkillPathsCreateManySkillPathInputEnvelopeSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateManySkillPathInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToSkillPathsCreateManySkillPathInputSchema),z.lazy(() => PersonsToSkillPathsCreateManySkillPathInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToSkillPathsCreateManySkillPathInputEnvelopeSchema;
