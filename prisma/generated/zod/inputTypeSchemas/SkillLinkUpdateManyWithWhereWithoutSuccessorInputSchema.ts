import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkScalarWhereInputSchema } from './SkillLinkScalarWhereInputSchema';
import { SkillLinkUpdateManyMutationInputSchema } from './SkillLinkUpdateManyMutationInputSchema';
import { SkillLinkUncheckedUpdateManyWithoutSuccessorInputSchema } from './SkillLinkUncheckedUpdateManyWithoutSuccessorInputSchema';

export const SkillLinkUpdateManyWithWhereWithoutSuccessorInputSchema: z.ZodType<Prisma.SkillLinkUpdateManyWithWhereWithoutSuccessorInput> = z.object({
  where: z.lazy(() => SkillLinkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillLinkUpdateManyMutationInputSchema),z.lazy(() => SkillLinkUncheckedUpdateManyWithoutSuccessorInputSchema) ]),
}).strict();

export default SkillLinkUpdateManyWithWhereWithoutSuccessorInputSchema;
