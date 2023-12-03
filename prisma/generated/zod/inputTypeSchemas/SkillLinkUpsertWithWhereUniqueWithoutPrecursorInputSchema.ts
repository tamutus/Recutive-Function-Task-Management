import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';
import { SkillLinkUpdateWithoutPrecursorInputSchema } from './SkillLinkUpdateWithoutPrecursorInputSchema';
import { SkillLinkUncheckedUpdateWithoutPrecursorInputSchema } from './SkillLinkUncheckedUpdateWithoutPrecursorInputSchema';
import { SkillLinkCreateWithoutPrecursorInputSchema } from './SkillLinkCreateWithoutPrecursorInputSchema';
import { SkillLinkUncheckedCreateWithoutPrecursorInputSchema } from './SkillLinkUncheckedCreateWithoutPrecursorInputSchema';

export const SkillLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema: z.ZodType<Prisma.SkillLinkUpsertWithWhereUniqueWithoutPrecursorInput> = z.object({
  where: z.lazy(() => SkillLinkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillLinkUpdateWithoutPrecursorInputSchema),z.lazy(() => SkillLinkUncheckedUpdateWithoutPrecursorInputSchema) ]),
  create: z.union([ z.lazy(() => SkillLinkCreateWithoutPrecursorInputSchema),z.lazy(() => SkillLinkUncheckedCreateWithoutPrecursorInputSchema) ]),
}).strict();

export default SkillLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema;
