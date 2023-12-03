import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutTagsInputSchema } from './ProjectTemplateCreateWithoutTagsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutTagsInputSchema } from './ProjectTemplateUncheckedCreateWithoutTagsInputSchema';
import { ProjectTemplateCreateOrConnectWithoutTagsInputSchema } from './ProjectTemplateCreateOrConnectWithoutTagsInputSchema';
import { ProjectTemplateUpsertWithoutTagsInputSchema } from './ProjectTemplateUpsertWithoutTagsInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateUpdateToOneWithWhereWithoutTagsInputSchema } from './ProjectTemplateUpdateToOneWithWhereWithoutTagsInputSchema';
import { ProjectTemplateUpdateWithoutTagsInputSchema } from './ProjectTemplateUpdateWithoutTagsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutTagsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutTagsInputSchema';

export const ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => ProjectTemplateUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectTemplateUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => ProjectTemplateUpdateWithoutTagsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default ProjectTemplateUpdateOneRequiredWithoutTagsNestedInputSchema;
