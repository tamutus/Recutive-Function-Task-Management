import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';
import { SkillLinkCreateWithoutSuccessorInputSchema } from './SkillLinkCreateWithoutSuccessorInputSchema';
import { SkillLinkUncheckedCreateWithoutSuccessorInputSchema } from './SkillLinkUncheckedCreateWithoutSuccessorInputSchema';

export const SkillLinkCreateOrConnectWithoutSuccessorInputSchema: z.ZodType<Prisma.SkillLinkCreateOrConnectWithoutSuccessorInput> = z.object({
  where: z.lazy(() => SkillLinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillLinkCreateWithoutSuccessorInputSchema),z.lazy(() => SkillLinkUncheckedCreateWithoutSuccessorInputSchema) ]),
}).strict();

export default SkillLinkCreateOrConnectWithoutSuccessorInputSchema;
