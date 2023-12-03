import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutSkillPathTagsInputSchema } from './PersonCreateWithoutSkillPathTagsInputSchema';
import { PersonUncheckedCreateWithoutSkillPathTagsInputSchema } from './PersonUncheckedCreateWithoutSkillPathTagsInputSchema';
import { PersonCreateOrConnectWithoutSkillPathTagsInputSchema } from './PersonCreateOrConnectWithoutSkillPathTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutSkillPathTagsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutSkillPathTagsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillPathTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillPathTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutSkillPathTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutSkillPathTagsInputSchema;
