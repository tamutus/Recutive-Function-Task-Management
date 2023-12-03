import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutEditedProjectsInputSchema } from './PersonCreateWithoutEditedProjectsInputSchema';
import { PersonUncheckedCreateWithoutEditedProjectsInputSchema } from './PersonUncheckedCreateWithoutEditedProjectsInputSchema';
import { PersonCreateOrConnectWithoutEditedProjectsInputSchema } from './PersonCreateOrConnectWithoutEditedProjectsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutEditedProjectsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutEditedProjectsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutEditedProjectsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEditedProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutEditedProjectsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutEditedProjectsInputSchema;
