import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateManySkillPathInputSchema } from './SkillsToSkillPathsCreateManySkillPathInputSchema';

export const SkillsToSkillPathsCreateManySkillPathInputEnvelopeSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateManySkillPathInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillsToSkillPathsCreateManySkillPathInputSchema),z.lazy(() => SkillsToSkillPathsCreateManySkillPathInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillsToSkillPathsCreateManySkillPathInputEnvelopeSchema;
