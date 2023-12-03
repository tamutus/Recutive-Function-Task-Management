import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';
import { SkillLinkUpdateWithoutSuccessorInputSchema } from './SkillLinkUpdateWithoutSuccessorInputSchema';
import { SkillLinkUncheckedUpdateWithoutSuccessorInputSchema } from './SkillLinkUncheckedUpdateWithoutSuccessorInputSchema';
import { SkillLinkCreateWithoutSuccessorInputSchema } from './SkillLinkCreateWithoutSuccessorInputSchema';
import { SkillLinkUncheckedCreateWithoutSuccessorInputSchema } from './SkillLinkUncheckedCreateWithoutSuccessorInputSchema';

export const SkillLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema: z.ZodType<Prisma.SkillLinkUpsertWithWhereUniqueWithoutSuccessorInput> = z.object({
  where: z.lazy(() => SkillLinkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillLinkUpdateWithoutSuccessorInputSchema),z.lazy(() => SkillLinkUncheckedUpdateWithoutSuccessorInputSchema) ]),
  create: z.union([ z.lazy(() => SkillLinkCreateWithoutSuccessorInputSchema),z.lazy(() => SkillLinkUncheckedCreateWithoutSuccessorInputSchema) ]),
}).strict();

export default SkillLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema;
