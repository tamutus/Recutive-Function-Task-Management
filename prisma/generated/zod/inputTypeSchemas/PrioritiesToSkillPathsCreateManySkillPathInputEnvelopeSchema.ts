import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsCreateManySkillPathInputSchema } from './PrioritiesToSkillPathsCreateManySkillPathInputSchema';

export const PrioritiesToSkillPathsCreateManySkillPathInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateManySkillPathInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateManySkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateManySkillPathInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToSkillPathsCreateManySkillPathInputEnvelopeSchema;
