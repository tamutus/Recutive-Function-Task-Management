import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';
import { SkillLinkUpdateWithoutSuccessorInputSchema } from './SkillLinkUpdateWithoutSuccessorInputSchema';
import { SkillLinkUncheckedUpdateWithoutSuccessorInputSchema } from './SkillLinkUncheckedUpdateWithoutSuccessorInputSchema';

export const SkillLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema: z.ZodType<Prisma.SkillLinkUpdateWithWhereUniqueWithoutSuccessorInput> = z.object({
  where: z.lazy(() => SkillLinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillLinkUpdateWithoutSuccessorInputSchema),z.lazy(() => SkillLinkUncheckedUpdateWithoutSuccessorInputSchema) ]),
}).strict();

export default SkillLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema;
