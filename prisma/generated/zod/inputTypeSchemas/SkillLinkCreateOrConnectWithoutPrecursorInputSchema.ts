import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';
import { SkillLinkCreateWithoutPrecursorInputSchema } from './SkillLinkCreateWithoutPrecursorInputSchema';
import { SkillLinkUncheckedCreateWithoutPrecursorInputSchema } from './SkillLinkUncheckedCreateWithoutPrecursorInputSchema';

export const SkillLinkCreateOrConnectWithoutPrecursorInputSchema: z.ZodType<Prisma.SkillLinkCreateOrConnectWithoutPrecursorInput> = z.object({
  where: z.lazy(() => SkillLinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillLinkCreateWithoutPrecursorInputSchema),z.lazy(() => SkillLinkUncheckedCreateWithoutPrecursorInputSchema) ]),
}).strict();

export default SkillLinkCreateOrConnectWithoutPrecursorInputSchema;
