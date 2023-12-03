import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkCreateManyPrecursorInputSchema } from './SkillLinkCreateManyPrecursorInputSchema';

export const SkillLinkCreateManyPrecursorInputEnvelopeSchema: z.ZodType<Prisma.SkillLinkCreateManyPrecursorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillLinkCreateManyPrecursorInputSchema),z.lazy(() => SkillLinkCreateManyPrecursorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillLinkCreateManyPrecursorInputEnvelopeSchema;
