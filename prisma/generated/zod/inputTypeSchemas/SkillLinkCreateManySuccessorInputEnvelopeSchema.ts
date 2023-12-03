import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkCreateManySuccessorInputSchema } from './SkillLinkCreateManySuccessorInputSchema';

export const SkillLinkCreateManySuccessorInputEnvelopeSchema: z.ZodType<Prisma.SkillLinkCreateManySuccessorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillLinkCreateManySuccessorInputSchema),z.lazy(() => SkillLinkCreateManySuccessorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillLinkCreateManySuccessorInputEnvelopeSchema;
