import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';
import { SkillLinkUpdateWithoutPrecursorInputSchema } from './SkillLinkUpdateWithoutPrecursorInputSchema';
import { SkillLinkUncheckedUpdateWithoutPrecursorInputSchema } from './SkillLinkUncheckedUpdateWithoutPrecursorInputSchema';

export const SkillLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema: z.ZodType<Prisma.SkillLinkUpdateWithWhereUniqueWithoutPrecursorInput> = z.object({
  where: z.lazy(() => SkillLinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillLinkUpdateWithoutPrecursorInputSchema),z.lazy(() => SkillLinkUncheckedUpdateWithoutPrecursorInputSchema) ]),
}).strict();

export default SkillLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema;
