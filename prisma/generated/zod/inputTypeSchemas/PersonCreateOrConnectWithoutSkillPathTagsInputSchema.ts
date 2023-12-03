import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutSkillPathTagsInputSchema } from './PersonCreateWithoutSkillPathTagsInputSchema';
import { PersonUncheckedCreateWithoutSkillPathTagsInputSchema } from './PersonUncheckedCreateWithoutSkillPathTagsInputSchema';

export const PersonCreateOrConnectWithoutSkillPathTagsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutSkillPathTagsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillPathTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillPathTagsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutSkillPathTagsInputSchema;
