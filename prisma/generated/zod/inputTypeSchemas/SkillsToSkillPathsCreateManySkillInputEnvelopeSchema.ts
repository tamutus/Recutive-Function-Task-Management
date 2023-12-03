import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateManySkillInputSchema } from './SkillsToSkillPathsCreateManySkillInputSchema';

export const SkillsToSkillPathsCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillsToSkillPathsCreateManySkillInputSchema),z.lazy(() => SkillsToSkillPathsCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillsToSkillPathsCreateManySkillInputEnvelopeSchema;
