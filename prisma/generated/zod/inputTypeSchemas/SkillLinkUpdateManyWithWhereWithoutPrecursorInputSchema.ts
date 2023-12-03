import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkScalarWhereInputSchema } from './SkillLinkScalarWhereInputSchema';
import { SkillLinkUpdateManyMutationInputSchema } from './SkillLinkUpdateManyMutationInputSchema';
import { SkillLinkUncheckedUpdateManyWithoutPrecursorInputSchema } from './SkillLinkUncheckedUpdateManyWithoutPrecursorInputSchema';

export const SkillLinkUpdateManyWithWhereWithoutPrecursorInputSchema: z.ZodType<Prisma.SkillLinkUpdateManyWithWhereWithoutPrecursorInput> = z.object({
  where: z.lazy(() => SkillLinkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillLinkUpdateManyMutationInputSchema),z.lazy(() => SkillLinkUncheckedUpdateManyWithoutPrecursorInputSchema) ]),
}).strict();

export default SkillLinkUpdateManyWithWhereWithoutPrecursorInputSchema;
